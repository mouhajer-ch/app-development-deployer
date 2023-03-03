// ******************************************************************* //
// ******************************************************************* //
// ******************************************************************* //

const API_GATEWAY = "https://api-id.execute-api.region.amazonaws.com/stage/api";

// DATA/CONFs related variables
var APP_CONFIGURATION = { defaultEnv: '', environments: [], services: [], apps: {} },
    SERVICES_DEPLOYED = [],
    SERVICES_TO_BE_DEPLOYED = [],
    HAPROXY_CONFIGURATION = {},
    ZIP_URIS = {};
// UI related variables
var content,
    updateEnvironment,
    addService,
    inputFilter;

window.addEventListener('DOMContentLoaded', async () => {
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ('content' in document.createElement('template')) {
        await setup();
        updateEnvironmentsMenu();
        updateServicesMenu();
        updateList();
        updateDeployedServicesSection(APP_CONFIGURATION.defaultEnv);
    } else {
        tagTemplateNotSupported();
    }

});

async function setup() {
    // APP_CONFIGURATION = await fetchData('/configuration') || APP_CONFIGURATION;
    // SERVICES_DEPLOYED = await getServicesDeployedToEnv(APP_CONFIGURATION.defaultEnv) ||  [];

    APP_CONFIGURATION = (typeof appConfig !== 'undefined') ? appConfig : APP_CONFIGURATION;
    SERVICES_DEPLOYED = (typeof servicesDeployed !== 'undefined') ? servicesDeployed : SERVICES_DEPLOYED;

    updateEnvironment = document.getElementById('environment-menu-list');
    updateEnvironment.onchange = updateDeployedEnvironment;

    addService = document.getElementById('add-service-from-list');
    addService.onclick = addToList;

    inputFilter = document.getElementById("servicesFilter");
    inputFilter.oninput = searchTable;
}

function tagTemplateNotSupported() {
    content = document.getElementById('main-content');
    content.innerHTML = '<h1> Tag template Not supported - Change/Update your browser <h1>';
}

// ******************************************************************* //
// ************************* API CALL Util *************************** //
// ******************************************************************* //

// TO DO - Set Error message to error-msg-box
async function fetchData(url) {
    try {
        const response = await axios.get(`${API_GATEWAY}${url}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

async function saveData(url, payload){
    try {
        const response = await axios.post(`${API_GATEWAY}${url}`, payload);
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
}

// ******************************************************************* //
// *************************** First Section ************************* //
// ******************************************************************* //

function updateEnvironmentsMenu() {
    APP_CONFIGURATION.environments.forEach((environment, index) => {
        var x = document.getElementById("environment-menu-list");
        var option = document.createElement("option");
        option.text = environment;
        x.add(option, x[index]);
    });
}

function updateServicesMenu() {
    APP_CONFIGURATION.services.sort((a, b) => a > b).forEach((service, index) => {
        var x = document.getElementById("service-menu-list");
        var option = document.createElement("option");
        option.text = service;
        x.add(option, x[index]);
    });
}

function updateDeployedEnvironment() {
    updateDeployedServicesSection(this.value)
}

function addToList() {
    var serviceSelected = document.getElementById("service-menu-list").value;
    var environmentSelected = document.getElementById("environment-menu-list").value;
    var releaseInput = document.getElementById("release-input").value;

    checkIfCanBeDeployed(serviceSelected, environmentSelected, releaseInput);
}

// ******************************************************************* //
// ************************** Second Section ************************* //
// ******************************************************************* //

function getServiceIndexInList(serv, env, rel) {
    return SERVICES_TO_BE_DEPLOYED.findIndex(s => {
        return s.serv === serv && s.env === env && s.rel === rel;
    });
}

function removeFromList(serv, env, rel) {
    const index = getServiceIndexInList(serv, env, rel);
    if( index !== -1) {
        SERVICES_TO_BE_DEPLOYED.splice(index, 1);
    }
    updateList();
}

function setErrorMessage(message) {
    document.getElementById("error-msg-text").innerText = message;
    document.getElementById('error-msg-box').style.display = 'block';
    setTimeout(() => {
        document.getElementById('error-msg-box').style.display = 'none';
    }, 3000);
}

function checkIfCanBeDeployed(serv, env, rel) {
    const ERROR_MESSAGES = [
        "Check Release Details - Release missing",
        " - Check Release Details - Zip not found!",
        " - Release already deployed",
        " - Release already in list",
        "Something went wrong!"
    ];
    const service = serv + "-" + rel + ".zip";

    if (!rel || !serv || !env) {
        setErrorMessage(ERROR_MESSAGES[0]);
    } else if (getServiceIndexInList(serv, env, rel) !== -1) {
        setErrorMessage(service + ERROR_MESSAGES[3]);
    } else if (checkIfServiceDeployed(serv, rel)) {
        setErrorMessage(service + ERROR_MESSAGES[2]);
    } else if (!checkIfZipReleased(serv, env, rel)) {
        setErrorMessage(service + ERROR_MESSAGES[1]);
    } else {
        addServiceToDeployList(serv, env, rel, 1);
    }
}

function checkIfServiceDeployed(serv, rel) {
    return SERVICES_DEPLOYED.findIndex(s => s.id === `/${serv}-${rel}`) !== -1;
}

async function checkIfZipReleased(serv, rel) {
    const uri = await fetchData(`/configuration/zipurl/${serv}-${rel}`);

    if(uri){
        ZIP_URIS[`${serv}-${rel}`] = uri;
    }

    return uri;
}

async function setHAProxyLabels(serv, rel) {
    const labels = {};
    const routeConfig = await fetchData(`/configuration/routes/${serv}-${rel}`) || {};

    // REMOVED
}

function addServiceToDeployList(serv, env, rel) {
    SERVICES_TO_BE_DEPLOYED.push({ serv, env, rel });

    updateList();
}

function updateList() {
    const sectionTwo = document.getElementById("section-two");
    const template = SERVICES_TO_BE_DEPLOYED.reduce((a, e) => {
        return a + createTemplateService(e.serv, e.env, e.rel);
    }, "");
    const deployButton = '<button class="govuk-button" data-module="govuk-button"> Deploy </button>';

    sectionTwo.innerHTML = (template) ? template + deployButton : "<p>Empty List</p>";
}

function createTemplateService(serv, env, rel) {
    const detail = APP_CONFIGURATION.apps[serv];

    return template = `
        <dl class="govuk-summary-list">
            <div class="govuk-summary-list__row">
            <dt class="govuk-summary-list__key" style="width: 50%">
                <a class="govuk-link" href="https://github.com/${APP_CONFIGURATION.gitDepartmentName}/${serv}" target="_blank">${serv}</a>
            </dt>
            <dd class="govuk-summary-list__value">
                <p class="govuk-body">Release: <b>${rel}</b></p>
                <p class="govuk-body">Environment: <b>${env}</b></p>
                <p class="govuk-body">CPU: <b>${detail.cpus}</b></p>
                <p class="govuk-body">Memory: <b>${detail.memory}</b></p>
                <p class="govuk-body">Port: <b>${detail.port}</b></p>
            </dd>
            <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="javascript:void(0)" onclick="removeFromList('${serv}', '${env}', '${rel}')"> Remove from List</a>
            </dd>
            </div>
        </dl>
    `;
}

async function saveServices() {
    const apps = SERVICES_TO_BE_DEPLOYED.map( app => {
        const appDetail = APP_CONFIGURATION.apps[app.serv];
        const datetime =  new Date();
        return {
            env: app.env,
            app: {
                // REMOVED
            }
        }
    });

    await saveData('/services', apps);
}

// ******************************************************************* //
// *************************** Third Section ************************* //
// ******************************************************************* //

function updateDeployedServicesSection(environment) {
    document.getElementById("environment-deployed").innerText = environment.toUpperCase();

    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    var tbody = document.querySelector("tbody");
    while (tbody.rows.length > 0) {
        tbody.deleteRow(0);
    }

    var template = document.querySelector('#table-template');

    SERVICES_DEPLOYED.forEach(service => {
        // Clone the new row and insert it into the table
        var clone = template.content.cloneNode(true);
        var td = clone.querySelectorAll("td");
        td[0].textContent = service.id;
        td[1].textContent = service.cpus;
        td[2].textContent = service.mem;
        td[3].textContent = service.ports[0];
        // td[4].textContent = service.instances;
        td[4].textContent = service.version;

        tbody.appendChild(clone);
    });
}

async function getServicesDeployedToEnv(environment) {
    return fetchData(`/services/${environment}`);
}

function searchTable(event) {
    // Declare variables
    var filter, table, tr, td, i, txtValue;
    filter = inputFilter.value.toUpperCase();
    table = document.getElementById("tableDeployedservices");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// ******************************************************************* //
// ******************************************************************* //
// ******************************************************************* //