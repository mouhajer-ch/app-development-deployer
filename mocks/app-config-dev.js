const appConfig = {
    // defaultEnv value must be first in the 'environments' list field
    defaultEnv       : "Earth",
    gitDepartmentName: "YourDepartmentName",
    environments     : ['Earth', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'] ,
    services         : ['acoma-crape-myrtle.some.cloud','closeup-of-aeonium-plants.some.cloud','african-daisy.some.cloud','osteospermum-x-hybrida.some.cloud','african-fern-pine.some.cloud','afrocarpus-gracilior.some.cloud','african-mask.some.cloud','alocasia-x-amazonica.some.cloud','african-milk-tree.some.cloud','euphorbia-trigona.some.cloud','sansevieria-cylindrica.some.cloud','african-spear-plant.some.cloud','sansevieria-cylindrica2.some.cloud','large-agave-plant.some.cloud','air-plant.some.cloud','tillandsia-kolbii.some.cloud','air-plant2.some.cloud','tillandsia-stricta.some.cloud','bugleweed-plant.some.cloud','ajuga-reptans.some.cloud','aleppo-pine.some.cloud','pinus-halepensis.some.cloud','algerian-ivy.some.cloud','hedera-algeriensis.some.cloud','alligator-juniper.some.cloud','juniperus-deppeana.some.cloud','almond-tree.some.cloud','prunus-dulcis.some.cloud','alocasia-house-plant.some.cloud','alpine-currant.some.cloud','ribes-alpinum.some.cloud','closeup-of-rose-of-sharon.some.cloud','althea-shrub.some.cloud','hibiscus-syriacus.some.cloud','aluminum-plant.some.cloud','pilea-cadierei.some.cloud','sweet-alyssum.some.cloud','alyssum.some.cloud','amaranth.some.cloud','amaryllis.some.cloud','hippeastrum.some.cloud','ambassador-allium.some.cloud','allium-ambassador.some.cloud','american-beech-tree.some.cloud','fagus-grandifolia.some.cloud','american-elderberry.some.cloud','sambucus-canadensis.some.cloud','american-ginseng.some.cloud','panax-quinquefolius.some.cloud','persimmon-tree.some.cloud','american-persimmon.some.cloud','diospyros-virginiana.some.cloud','american-wisteria.some.cloud','wisteria-frutescens.some.cloud','amur-adonis.some.cloud','adonis-amurensis.some.cloud','anemone-hupehensis.some.cloud','angels-trumpet-flower.some.cloud','angel-trumpet-datura.some.cloud','daturainoxia.some.cloud','angelica-archangelica.some.cloud','angelina-stonecrop.some.cloud','angelonia-flowers.some.cloud','angelonia-angustifolia.some.cloud','anise-hyssop.some.cloud','agastache-foeniculum.some.cloud','anise-magnolia.some.cloud','magnolia-salicifolia.some.cloud','vase-of-anthurium-flowers.some.cloud','apricot-tree.some.cloud','prunus-armeniaca.some.cloud','arabian-jasmine.some.cloud','jasminum-sambac.some.cloud','areca-palm.some.cloud','dypsis-lutescens.some.cloud','arizona-cypress.some.cloud','cupressus-arizonica.some.cloud','aronia-melanocarpa.some.cloud','varieties-of-arrowhead-vine.some.cloud','arrowhead-vine.some.cloud','syngonium-podophyllum.some.cloud','arrowwood-viburnum.some.cloud','viburnum-dentatum.some.cloud','closeup-of-artemisia.some.cloud','artemisia.some.cloud','artichoke.some.cloud','cynara-scolymus.some.cloud','arugula.some.cloud','eruca-vesicaria.some.cloud','potted-pink-calla-lilies.some.cloud','arum-lily.some.cloud','zantedeschia-aethiopica.some.cloud','ashe-magnolia.some.cloud','magnolia-ashei.some.cloud','asparagus-ready-for-harvest.some.cloud','asparagus-officinalis.some.cloud','asparagus-fern.some.cloud','aster-flowers.some.cloud','symphyotrichum.some.cloud','astilbe-plants.some.cloud'],
    'apps': {
      'acoma-crape-myrtle.some.cloud': {
        name: 'acoma-crape-myrtle.some.cloud',
        port: 50900,
        cpus: 0.1,
        memory: 128
      },
      'closeup-of-aeonium-plants.some.cloud': {
        name: 'closeup-of-aeonium-plants.some.cloud',
        port: 50901,
        cpus: 0.1,
        memory: 128
      },
      'african-daisy.some.cloud': {
        name: 'african-daisy.some.cloud',
        port: 50911,
        cpus: 0.1,
        memory: 128
      },
      'osteospermum-x-hybrida.some.cloud': {
        name: 'osteospermum-x-hybrida.some.cloud',
        port: 50912,
        cpus: 0.1,
        memory: 128
      },
      'african-fern-pine.some.cloud': {
        name: 'african-fern-pine.some.cloud',
        port: 50915,
        cpus: 0.1,
        memory: 128
      },
      'afrocarpus-gracilior.some.cloud': {
        name: 'afrocarpus-gracilior.some.cloud',
        port: 50913,
        cpus: 0.1,
        memory: 128
      },
      'african-mask.some.cloud': {
        name: 'african-mask.some.cloud',
        port: 50914,
        cpus: 0.1,
        memory: 128
      },
      'alocasia-x-amazonica.some.cloud': {
        name: 'alocasia-x-amazonica.some.cloud',
        port: 50916,
        cpus: 0.1,
        memory: 128
      },
      'african-milk-tree.some.cloud': {
        name: 'african-milk-tree.some.cloud',
        port: 50917,
        cpus: 0.1,
        memory: 128
      },
      'euphorbia-trigona.some.cloud': {
        name: 'euphorbia-trigona.some.cloud',
        port: 50903,
        cpus: 0.1,
        memory: 128
      },
      'sansevieria-cylindrica.some.cloud': {
        name: 'sansevieria-cylindrica.some.cloud',
        port: 50904,
        cpus: 0.1,
        memory: 128
      },
      'african-spear-plant.some.cloud': {
        name: 'african-spear-plant.some.cloud',
        port: 50905,
        cpus: 0.1,
        memory: 128
      },
      'sansevieria-cylindrica2.some.cloud': {
        name: 'sansevieria-cylindrica2.some.cloud',
        port: 50907,
        cpus: 0.1,
        memory: 128
      },
      'large-agave-plant.some.cloud': {
        name: 'large-agave-plant.some.cloud',
        port: 50904,
        cpus: 0.1,
        memory: 128
      },
      'air-plant.some.cloud': {
        name: 'air-plant.some.cloud',
        port: 50908,
        cpus: 0.1,
        memory: 128
      },
      'tillandsia-kolbii.some.cloud': {
        name: 'tillandsia-kolbii.some.cloud',
        port: 50909,
        cpus: 0.1,
        memory: 128
      },
      'air-plant2.some.cloud': {
        name: 'air-plant2.some.cloud',
        port: 50906,
        cpus: 0.1,
        memory: 128
      },
      'tillandsia-stricta.some.cloud': {
        name: 'tillandsia-stricta.some.cloud',
        port: 50901,
        cpus: 0.1,
        memory: 128
      },
      'bugleweed-plant.some.cloud': {
        name: 'bugleweed-plant.some.cloud',
        port: 50902,
        cpus: 0.1,
        memory: 128
      },
      'ajuga-reptans.some.cloud': {
        name: 'ajuga-reptans.some.cloud',
        port: 50903,
        cpus: 0.1,
        memory: 128
      },
      'aleppo-pine.some.cloud': {
        name: 'aleppo-pine.some.cloud',
        port: 50904,
        cpus: 0.1,
        memory: 128
      },
      'pinus-halepensis.some.cloud': {
        name: 'pinus-halepensis.some.cloud',
        port: 50905,
        cpus: 0.1,
        memory: 128
      },
      'algerian-ivy.some.cloud': {
        name: 'algerian-ivy.some.cloud',
        port: 50901,
        cpus: 0.1,
        memory: 128
      },
      'hedera-algeriensis.some.cloud': {
        name: 'hedera-algeriensis.some.cloud',
        port: 50902,
        cpus: 0.1,
        memory: 128
      },
      'alligator-juniper.some.cloud': {
        name: 'alligator-juniper.some.cloud',
        port: 50903,
        cpus: 0.1,
        memory: 128
      },
      'juniperus-deppeana.some.cloud': {
        name: 'juniperus-deppeana.some.cloud',
        port: 50920,
        cpus: 0.1,
        memory: 128
      },
      'almond-tree.some.cloud': {
        name: 'almond-tree.some.cloud',
        port: 50921,
        cpus: 0.1,
        memory: 128
      },
      'prunus-dulcis.some.cloud': {
        name: 'prunus-dulcis.some.cloud',
        port: 50998,
        cpus: 0.1,
        memory: 128
      },
      'alocasia-house-plant.some.cloud': {
        name: 'alocasia-house-plant.some.cloud',
        port: 5095,
        cpus: 0.1,
        memory: 128
      },
      'alpine-currant.some.cloud': {
        name: 'alpine-currant.some.cloud',
        port: 50906,
        cpus: 0.1,
        memory: 128
      },
      'ribes-alpinum.some.cloud': {
        name: 'ribes-alpinum.some.cloud',
        port: 50907,
        cpus: 0.1,
        memory: 128
      },
      'closeup-of-rose-of-sharon.some.cloud': {
        name: 'closeup-of-rose-of-sharon.some.cloud',
        port: 50908,
        cpus: 0.1,
        memory: 128
      },
      'althea-shrub.some.cloud': {
        name: 'althea-shrub.some.cloud',
        port: 50910,
        cpus: 0.1,
        memory: 128
      },
      'hibiscus-syriacus.some.cloud': {
        name: 'hibiscus-syriacus.some.cloud',
        port: 50911,
        cpus: 0.1,
        memory: 128
      },
      'aluminum-plant.some.cloud': {
        name: 'aluminum-plant.some.cloud',
        port: 50914,
        cpus: 0.1,
        memory: 128
      },
      'pilea-cadierei.some.cloud': {
        name: 'pilea-cadierei.some.cloud',
        port: 50916,
        cpus: 0.1,
        memory: 128
      },
      'sweet-alyssum.some.cloud': {
        name: 'sweet-alyssum.some.cloud',
        port: 50917,
        cpus: 0.1,
        memory: 128
      },
      'alyssum.some.cloud': {
        name: 'alyssum.some.cloud',
        port: 50918,
        cpus: 0.1,
        memory: 128
      },
      'amaranth.some.cloud': {
        name: 'amaranth.some.cloud',
        port: 50920,
        cpus: 0.1,
        memory: 128
      },
      'amaryllis.some.cloud': {
        name: 'amaryllis.some.cloud',
        port: 50921,
        cpus: 0.1,
        memory: 128
      },
      'hippeastrum.some.cloud': {
        name: 'hippeastrum.some.cloud',
        port: 50922,
        cpus: 0.1,
        memory: 128
      },
      'ambassador-allium.some.cloud': {
        name: 'ambassador-allium.some.cloud',
        port: 50923,
        cpus: 0.1,
        memory: 128
      },
      'allium-ambassador.some.cloud': {
        name: 'allium-ambassador.some.cloud',
        port: 50924,
        cpus: 0.1,
        memory: 128
      },
      'american-beech-tree.some.cloud': {
        name: 'american-beech-tree.some.cloud',
        port: 50925,
        cpus: 0.1,
        memory: 128
      },
      'fagus-grandifolia.some.cloud': {
        name: 'fagus-grandifolia.some.cloud',
        port: 50926,
        cpus: 0.1,
        memory: 128
      },
      'american-elderberry.some.cloud': {
        name: 'american-elderberry.some.cloud',
        port: 50928,
        cpus: 0.1,
        memory: 128
      },
      'sambucus-canadensis.some.cloud': {
        name: 'sambucus-canadensis.some.cloud',
        port: 50900,
        cpus: 0.1,
        memory: 128
      },
      'american-ginseng.some.cloud': {
        name: 'american-ginseng.some.cloud',
        port: 50929,
        cpus: 0.1,
        memory: 128
      },
      'panax-quinquefolius.some.cloud': {
        name: 'panax-quinquefolius.some.cloud',
        port: 50901,
        cpus: 0.1,
        memory: 128
      },
      'persimmon-tree.some.cloud': {
        name: 'persimmon-tree.some.cloud',
        port: 50930,
        cpus: 0.1,
        memory: 128
      },
      'american-persimmon.some.cloud': {
        name: 'american-persimmon.some.cloud',
        port: 50902,
        cpus: 0.1,
        memory: 128
      },
      'diospyros-virginiana.some.cloud': {
        name: 'diospyros-virginiana.some.cloud',
        port: 50931,
        cpus: 0.1,
        memory: 128
      },
      'american-wisteria.some.cloud': {
        name: 'american-wisteria.some.cloud',
        port: 50932,
        cpus: 0.1,
        memory: 128
      },
      'wisteria-frutescens.some.cloud': {
        name: 'wisteria-frutescens.some.cloud',
        port: 50934,
        cpus: 0.1,
        memory: 128
      },
      'amur-adonis.some.cloud': {
        name: 'amur-adonis.some.cloud',
        port: 50935,
        cpus: 0.1,
        memory: 128
      },
      'adonis-amurensis.some.cloud': {
        name: 'adonis-amurensis.some.cloud',
        port: 50936,
        cpus: 0.1,
        memory: 128
      },
      'anemone-hupehensis.some.cloud': {
        name: 'anemone-hupehensis.some.cloud',
        port: 50938,
        cpus: 0.1,
        memory: 128
      },
      'angels-trumpet-flower.some.cloud': {
        name: 'angels-trumpet-flower.some.cloud',
        port: 50939,
        cpus: 0.1,
        memory: 128
      },
      'angel-trumpet-datura.some.cloud': {
        name: 'angel-trumpet-datura.some.cloud',
        port: 50940,
        cpus: 0.1,
        memory: 128
      },
      'daturainoxia.some.cloud': {
        name: 'daturainoxia.some.cloud',
        port: 50941,
        cpus: 0.1,
        memory: 128
      },
      'angelica-archangelica.some.cloud': {
        name: 'angelica-archangelica.some.cloud',
        port: 50942,
        cpus: 0.1,
        memory: 128
      },
      'angelina-stonecrop.some.cloud': {
        name: 'angelina-stonecrop.some.cloud',
        port: 50943,
        cpus: 0.1,
        memory: 128
      },
      'angelonia-flowers.some.cloud': {
        name: 'angelonia-flowers.some.cloud',
        port: 50944,
        cpus: 0.1,
        memory: 128
      },
      'angelonia-angustifolia.some.cloud': {
        name: 'angelonia-angustifolia.some.cloud',
        port: 50945,
        cpus: 0.1,
        memory: 128
      },
      'anise-hyssop.some.cloud': {
        name: 'anise-hyssop.some.cloud',
        port: 50927,
        cpus: 0.1,
        memory: 128
      },
      'agastache-foeniculum.some.cloud': {
        name: 'agastache-foeniculum.some.cloud',
        port: 50903,
        cpus: 0.1,
        memory: 128
      },
      'anise-magnolia.some.cloud': {
        name: 'anise-magnolia.some.cloud',
        port: 50933,
        cpus: 0.1,
        memory: 128
      },
      'magnolia-salicifolia.some.cloud': {
        name: 'magnolia-salicifolia.some.cloud',
        port: 50985,
        cpus: 0.1,
        memory: 128
      },
      'vase-of-anthurium-flowers.some.cloud': {
        name: 'vase-of-anthurium-flowers.some.cloud',
        port: 50910,
        cpus: 0.1,
        memory: 128
      },
      'apricot-tree.some.cloud': {
        name: 'apricot-tree.some.cloud',
        port: 50918,
        cpus: 0.1,
        memory: 128
      },
      'prunus-armeniaca.some.cloud': {
        name: 'prunus-armeniaca.some.cloud',
        port: 50919,
        cpus: 0.1,
        memory: 128
      },
      'arabian-jasmine.some.cloud': {
        name: 'arabian-jasmine.some.cloud',
        port: 50901,
        cpus: 0.1,
        memory: 128
      },
      'jasminum-sambac.some.cloud': {
        name: 'jasminum-sambac.some.cloud',
        port: 50902,
        cpus: 0.1,
        memory: 128
      },
      'areca-palm.some.cloud': {
        name: 'areca-palm.some.cloud',
        port: 50903,
        cpus: 0.1,
        memory: 128
      },
      'dypsis-lutescens.some.cloud': {
        name: 'dypsis-lutescens.some.cloud',
        port: 50904,
        cpus: 0.1,
        memory: 128
      },
      'arizona-cypress.some.cloud': {
        name: 'arizona-cypress.some.cloud',
        port: 50905,
        cpus: 0.1,
        memory: 128
      },
      'cupressus-arizonica.some.cloud': {
        name: 'cupressus-arizonica.some.cloud',
        port: 50906,
        cpus: 0.1,
        memory: 128
      },
      'aronia-melanocarpa.some.cloud': {
        name: 'aronia-melanocarpa.some.cloud',
        port: 50950,
        cpus: 0.1,
        memory: 128
      },
      'varieties-of-arrowhead-vine.some.cloud': {
        name: 'varieties-of-arrowhead-vine.some.cloud',
        port: 50951,
        cpus: 0.1,
        memory: 128
      },
      'arrowhead-vine.some.cloud': {
        name: 'arrowhead-vine.some.cloud',
        port: 50952,
        cpus: 0.1,
        memory: 128
      },
      'syngonium-podophyllum.some.cloud': {
        name: 'syngonium-podophyllum.some.cloud',
        port: 50953,
        cpus: 0.1,
        memory: 128
      },
      'arrowwood-viburnum.some.cloud': {
        name: 'arrowwood-viburnum.some.cloud',
        port: 50954,
        cpus: 0.1,
        memory: 128
      },
      'viburnum-dentatum.some.cloud': {
        name: 'viburnum-dentatum.some.cloud',
        port: 50955,
        cpus: 0.1,
        memory: 128
      },
      'closeup-of-artemisia.some.cloud': {
        name: 'closeup-of-artemisia.some.cloud',
        port: 50956,
        cpus: 0.1,
        memory: 128
      },
      'artemisia.some.cloud': {
        name: 'artemisia.some.cloud',
        port: 50957,
        cpus: 0.1,
        memory: 128
      },
      'artichoke.some.cloud': {
        name: 'artichoke.some.cloud',
        port: 50958,
        cpus: 0.1,
        memory: 128
      },
      'cynara-scolymus.some.cloud': {
        name: 'cynara-scolymus.some.cloud',
        port: 50901,
        cpus: 0.1,
        memory: 128
      },
      'arugula.some.cloud': {
        name: 'arugula.some.cloud',
        port: 50902,
        cpus: 0.1,
        memory: 128
      },
      'eruca-vesicaria.some.cloud': {
        name: 'eruca-vesicaria.some.cloud',
        port: 50915,
        cpus: 0.1,
        memory: 128
      },
      'potted-pink-calla-lilies.some.cloud': {
        name: 'potted-pink-calla-lilies.some.cloud',
        port: 50916,
        cpus: 0.25,
        memory: 128
      },
      'arum-lily.some.cloud': {
        name: 'arum-lily.some.cloud',
        port: 50924,
        cpus: 0.25,
        memory: '128v'
      },
      'zantedeschia-aethiopica.some.cloud': {
        name: 'zantedeschia-aethiopica.some.cloud',
        port: 50984,
        cpus: 0.1,
        memory: 128
      },
      'ashe-magnolia.some.cloud': {
        name: 'ashe-magnolia.some.cloud',
        port: 50985,
        cpus: 0.1,
        memory: 128
      },
      'magnolia-ashei.some.cloud': {
        name: 'magnolia-ashei.some.cloud',
        port: 50917,
        cpus: 0.1,
        memory: 128
      },
      'asparagus-ready-for-harvest.some.cloud': {
        name: 'asparagus-ready-for-harvest.some.cloud',
        port: 50918,
        cpus: 0.1,
        memory: 128
      },
      'asparagus-officinalis.some.cloud': {
        name: 'asparagus-officinalis.some.cloud',
        port: 50939,
        cpus: 0.1,
        memory: 128
      },
      'asparagus-fern.some.cloud': {
        name: 'asparagus-fern.some.cloud',
        port: 50920,
        cpus: 0.1,
        memory: 128
      },
      'aster-flowers.some.cloud': {
        name: 'aster-flowers.some.cloud',
        port: 50921,
        cpus: 0.1,
        memory: 128
      },
      'symphyotrichum.some.cloud': {
        name: 'symphyotrichum.some.cloud',
        port: 50920,
        cpus: 0.1,
        memory: 128
      },
      'astilbe-plants.some.cloud': {
        name: 'astilbe-plants.some.cloud',
        port: 50921,
        cpus: 0.1,
        memory: 128
      }
    }
  };