ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3006").setExtent([654282.210213, 6571757.225258, 687530.202039, 6592395.386314]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Webmap_1 = new ol.format.GeoJSON();
var features_Webmap_1 = format_Webmap_1.readFeatures(json_Webmap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Webmap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Webmap_1.addFeatures(features_Webmap_1);
var lyr_Webmap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Webmap_1, 
                style: style_Webmap_1,
                popuplayertitle: 'Webmap',
                interactive: true,
                title: '<img src="styles/legend/Webmap_1.png" /> Webmap'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Webmap_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Webmap_1];
lyr_Webmap_1.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', 'layer': 'layer', 'path': 'path', });
lyr_Webmap_1.set('fieldImages', {'fid': 'Range', 'Stadsdelsområde': 'TextEdit', 'Stadsdelsnamn': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Webmap_1.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'inline label - always visible', 'layer': 'no label', 'path': 'no label', });
lyr_Webmap_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});