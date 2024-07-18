ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-5.352738, 36.127918, -5.349132, 36.134481]);
var wms_layers = [];

var format_map_0 = new ol.format.GeoJSON();
var features_map_0 = format_map_0.readFeatures(json_map_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_map_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_map_0.addFeatures(features_map_0);
var lyr_map_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_map_0, 
                style: style_map_0,
                popuplayertitle: "map",
                interactive: false,
                title: '<img src="styles/legend/map_0.png" /> map'
            });
var format_Pathsoriginal_1 = new ol.format.GeoJSON();
var features_Pathsoriginal_1 = format_Pathsoriginal_1.readFeatures(json_Pathsoriginal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pathsoriginal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pathsoriginal_1.addFeatures(features_Pathsoriginal_1);
var lyr_Pathsoriginal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pathsoriginal_1, 
                style: style_Pathsoriginal_1,
                popuplayertitle: "Paths original",
                interactive: false,
                title: '<img src="styles/legend/Pathsoriginal_1.png" /> Paths original'
            });
var format_Stairs_2 = new ol.format.GeoJSON();
var features_Stairs_2 = format_Stairs_2.readFeatures(json_Stairs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Stairs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stairs_2.addFeatures(features_Stairs_2);
var lyr_Stairs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stairs_2, 
                style: style_Stairs_2,
                popuplayertitle: "Stairs",
                interactive: false,
                title: '<img src="styles/legend/Stairs_2.png" /> Stairs'
            });
var format_Generalveg_3 = new ol.format.GeoJSON();
var features_Generalveg_3 = format_Generalveg_3.readFeatures(json_Generalveg_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Generalveg_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Generalveg_3.addFeatures(features_Generalveg_3);
var lyr_Generalveg_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Generalveg_3, 
                style: style_Generalveg_3,
                popuplayertitle: "General veg",
                interactive: false,
                title: '<img src="styles/legend/Generalveg_3.png" /> General veg'
            });
var format_Cannons_4 = new ol.format.GeoJSON();
var features_Cannons_4 = format_Cannons_4.readFeatures(json_Cannons_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cannons_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cannons_4.addFeatures(features_Cannons_4);
var lyr_Cannons_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cannons_4, 
                style: style_Cannons_4,
                popuplayertitle: "Cannons",
                interactive: false,
                title: '<img src="styles/legend/Cannons_4.png" /> Cannons'
            });
var format_Beds_5 = new ol.format.GeoJSON();
var features_Beds_5 = format_Beds_5.readFeatures(json_Beds_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Beds_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beds_5.addFeatures(features_Beds_5);
var lyr_Beds_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beds_5, 
                style: style_Beds_5,
                popuplayertitle: "Beds",
                interactive: false,
                title: '<img src="styles/legend/Beds_5.png" /> Beds'
            });
var format_Merged_6 = new ol.format.GeoJSON();
var features_Merged_6 = format_Merged_6.readFeatures(json_Merged_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Merged_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_6.addFeatures(features_Merged_6);
var lyr_Merged_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merged_6, 
                style: style_Merged_6,
                popuplayertitle: "Merged",
                interactive: false,
                title: '<img src="styles/legend/Merged_6.png" /> Merged'
            });
var format_Educationareas_7 = new ol.format.GeoJSON();
var features_Educationareas_7 = format_Educationareas_7.readFeatures(json_Educationareas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Educationareas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educationareas_7.addFeatures(features_Educationareas_7);
var lyr_Educationareas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Educationareas_7, 
                style: style_Educationareas_7,
                popuplayertitle: "Education areas",
                interactive: false,
                title: '<img src="styles/legend/Educationareas_7.png" /> Education areas'
            });
var format_Dogpark_8 = new ol.format.GeoJSON();
var features_Dogpark_8 = format_Dogpark_8.readFeatures(json_Dogpark_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dogpark_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dogpark_8.addFeatures(features_Dogpark_8);
var lyr_Dogpark_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dogpark_8, 
                style: style_Dogpark_8,
                popuplayertitle: "Dog park",
                interactive: false,
                title: '<img src="styles/legend/Dogpark_8.png" /> Dog park'
            });
var format_Buildings_9 = new ol.format.GeoJSON();
var features_Buildings_9 = format_Buildings_9.readFeatures(json_Buildings_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buildings_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_9.addFeatures(features_Buildings_9);
var lyr_Buildings_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_9, 
                style: style_Buildings_9,
                popuplayertitle: "Buildings",
                interactive: false,
                title: '<img src="styles/legend/Buildings_9.png" /> Buildings'
            });
var format_Plantcollection_10 = new ol.format.GeoJSON();
var features_Plantcollection_10 = format_Plantcollection_10.readFeatures(json_Plantcollection_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Plantcollection_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantcollection_10.addFeatures(features_Plantcollection_10);
var lyr_Plantcollection_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantcollection_10, 
                style: style_Plantcollection_10,
                popuplayertitle: "Plant collection",
                interactive: false,
                title: '<img src="styles/legend/Plantcollection_10.png" /> Plant collection'
            });
var format_Water_11 = new ol.format.GeoJSON();
var features_Water_11 = format_Water_11.readFeatures(json_Water_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Water_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_11.addFeatures(features_Water_11);
var lyr_Water_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_11, 
                style: style_Water_11,
                popuplayertitle: "Water",
                interactive: false,
                title: '<img src="styles/legend/Water_11.png" /> Water'
            });
var format_ChildrensPark_12 = new ol.format.GeoJSON();
var features_ChildrensPark_12 = format_ChildrensPark_12.readFeatures(json_ChildrensPark_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ChildrensPark_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChildrensPark_12.addFeatures(features_ChildrensPark_12);
var lyr_ChildrensPark_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChildrensPark_12, 
                style: style_ChildrensPark_12,
                popuplayertitle: "Childrens Park",
                interactive: false,
                title: '<img src="styles/legend/ChildrensPark_12.png" /> Childrens Park'
            });
var format_Statues_13 = new ol.format.GeoJSON();
var features_Statues_13 = format_Statues_13.readFeatures(json_Statues_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Statues_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Statues_13.addFeatures(features_Statues_13);
var lyr_Statues_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Statues_13, 
                style: style_Statues_13,
                popuplayertitle: "Statues",
                interactive: false,
                title: '<img src="styles/legend/Statues_13.png" /> Statues'
            });
var format_TheDell_14 = new ol.format.GeoJSON();
var features_TheDell_14 = format_TheDell_14.readFeatures(json_TheDell_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TheDell_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TheDell_14.addFeatures(features_TheDell_14);
var lyr_TheDell_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TheDell_14, 
                style: style_TheDell_14,
                popuplayertitle: "The Dell",
                interactive: false,
                title: '<img src="styles/legend/TheDell_14.png" /> The Dell'
            });
var format_Theatre_15 = new ol.format.GeoJSON();
var features_Theatre_15 = format_Theatre_15.readFeatures(json_Theatre_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Theatre_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Theatre_15.addFeatures(features_Theatre_15);
var lyr_Theatre_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Theatre_15, 
                style: style_Theatre_15,
                popuplayertitle: "Theatre",
                interactive: false,
                title: '<img src="styles/legend/Theatre_15.png" /> Theatre'
            });
var format_Bridge_16 = new ol.format.GeoJSON();
var features_Bridge_16 = format_Bridge_16.readFeatures(json_Bridge_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bridge_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bridge_16.addFeatures(features_Bridge_16);
var lyr_Bridge_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bridge_16, 
                style: style_Bridge_16,
                popuplayertitle: "Bridge",
                interactive: false,
                title: '<img src="styles/legend/Bridge_16.png" /> Bridge'
            });
var format_WildlifePark_17 = new ol.format.GeoJSON();
var features_WildlifePark_17 = format_WildlifePark_17.readFeatures(json_WildlifePark_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WildlifePark_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildlifePark_17.addFeatures(features_WildlifePark_17);
var lyr_WildlifePark_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WildlifePark_17, 
                style: style_WildlifePark_17,
                popuplayertitle: "Wildlife Park",
                interactive: false,
                title: '<img src="styles/legend/WildlifePark_17.png" /> Wildlife Park'
            });
var format_Theatrefull_18 = new ol.format.GeoJSON();
var features_Theatrefull_18 = format_Theatrefull_18.readFeatures(json_Theatrefull_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Theatrefull_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Theatrefull_18.addFeatures(features_Theatrefull_18);
var lyr_Theatrefull_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Theatrefull_18, 
                style: style_Theatrefull_18,
                popuplayertitle: "Theatrefull",
                interactive: false,
                title: '<img src="styles/legend/Theatrefull_18.png" /> Theatrefull'
            });
var format_Northpaths_19 = new ol.format.GeoJSON();
var features_Northpaths_19 = format_Northpaths_19.readFeatures(json_Northpaths_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Northpaths_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Northpaths_19.addFeatures(features_Northpaths_19);
var lyr_Northpaths_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Northpaths_19, 
                style: style_Northpaths_19,
                popuplayertitle: "North paths",
                interactive: false,
                title: '<img src="styles/legend/Northpaths_19.png" /> North paths'
            });
var format_Gardensextent_20 = new ol.format.GeoJSON();
var features_Gardensextent_20 = format_Gardensextent_20.readFeatures(json_Gardensextent_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gardensextent_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gardensextent_20.addFeatures(features_Gardensextent_20);
var lyr_Gardensextent_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gardensextent_20, 
                style: style_Gardensextent_20,
                popuplayertitle: "Gardens extent",
                interactive: false,
                title: '<img src="styles/legend/Gardensextent_20.png" /> Gardens extent'
            });
var format_Office_area_21 = new ol.format.GeoJSON();
var features_Office_area_21 = format_Office_area_21.readFeatures(json_Office_area_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Office_area_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Office_area_21.addFeatures(features_Office_area_21);
var lyr_Office_area_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Office_area_21, 
                style: style_Office_area_21,
                popuplayertitle: "Office_area",
                interactive: false,
                title: '<img src="styles/legend/Office_area_21.png" /> Office_area'
            });
var format_Mothtrap_22 = new ol.format.GeoJSON();
var features_Mothtrap_22 = format_Mothtrap_22.readFeatures(json_Mothtrap_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mothtrap_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mothtrap_22.addFeatures(features_Mothtrap_22);
var lyr_Mothtrap_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mothtrap_22, 
                style: style_Mothtrap_22,
                popuplayertitle: "Moth trap",
                interactive: true,
                title: '<img src="styles/legend/Mothtrap_22.png" /> Moth trap'
            });
var format_Wild_plants_23 = new ol.format.GeoJSON();
var features_Wild_plants_23 = format_Wild_plants_23.readFeatures(json_Wild_plants_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wild_plants_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wild_plants_23.addFeatures(features_Wild_plants_23);
var lyr_Wild_plants_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wild_plants_23, 
                style: style_Wild_plants_23,
                popuplayertitle: "Wild_plants",
                interactive: true,
                title: '<img src="styles/legend/Wild_plants_23.png" /> Wild_plants'
            });
var format_Succulents_24 = new ol.format.GeoJSON();
var features_Succulents_24 = format_Succulents_24.readFeatures(json_Succulents_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Succulents_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Succulents_24.addFeatures(features_Succulents_24);
var lyr_Succulents_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Succulents_24, 
                style: style_Succulents_24,
                popuplayertitle: "Succulents",
                interactive: true,
                title: '<img src="styles/legend/Succulents_24.png" /> Succulents'
            });
var format_Vines_25 = new ol.format.GeoJSON();
var features_Vines_25 = format_Vines_25.readFeatures(json_Vines_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Vines_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vines_25.addFeatures(features_Vines_25);
var lyr_Vines_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vines_25, 
                style: style_Vines_25,
                popuplayertitle: "Vines",
                interactive: true,
                title: '<img src="styles/legend/Vines_25.png" /> Vines'
            });
var format_Shrubs_26 = new ol.format.GeoJSON();
var features_Shrubs_26 = format_Shrubs_26.readFeatures(json_Shrubs_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Shrubs_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shrubs_26.addFeatures(features_Shrubs_26);
var lyr_Shrubs_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shrubs_26, 
                style: style_Shrubs_26,
                popuplayertitle: "Shrubs",
                interactive: true,
                title: '<img src="styles/legend/Shrubs_26.png" /> Shrubs'
            });
var format_Aloes_27 = new ol.format.GeoJSON();
var features_Aloes_27 = format_Aloes_27.readFeatures(json_Aloes_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Aloes_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aloes_27.addFeatures(features_Aloes_27);
var lyr_Aloes_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aloes_27, 
                style: style_Aloes_27,
                popuplayertitle: "Aloes",
                interactive: true,
                title: '<img src="styles/legend/Aloes_27.png" /> Aloes'
            });
var format_Bulbs_allies_28 = new ol.format.GeoJSON();
var features_Bulbs_allies_28 = format_Bulbs_allies_28.readFeatures(json_Bulbs_allies_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bulbs_allies_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bulbs_allies_28.addFeatures(features_Bulbs_allies_28);
var lyr_Bulbs_allies_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bulbs_allies_28, 
                style: style_Bulbs_allies_28,
                popuplayertitle: "Bulbs_allies",
                interactive: true,
                title: '<img src="styles/legend/Bulbs_allies_28.png" /> Bulbs_allies'
            });
var format_Epipytes_allies_29 = new ol.format.GeoJSON();
var features_Epipytes_allies_29 = format_Epipytes_allies_29.readFeatures(json_Epipytes_allies_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Epipytes_allies_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epipytes_allies_29.addFeatures(features_Epipytes_allies_29);
var lyr_Epipytes_allies_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epipytes_allies_29, 
                style: style_Epipytes_allies_29,
                popuplayertitle: "Epipytes_allies",
                interactive: true,
                title: '<img src="styles/legend/Epipytes_allies_29.png" /> Epipytes_allies'
            });
var format_Grasses_allies_30 = new ol.format.GeoJSON();
var features_Grasses_allies_30 = format_Grasses_allies_30.readFeatures(json_Grasses_allies_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Grasses_allies_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grasses_allies_30.addFeatures(features_Grasses_allies_30);
var lyr_Grasses_allies_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grasses_allies_30, 
                style: style_Grasses_allies_30,
                popuplayertitle: "Grasses_allies",
                interactive: true,
                title: '<img src="styles/legend/Grasses_allies_30.png" /> Grasses_allies'
            });
var format_Herbaceous_31 = new ol.format.GeoJSON();
var features_Herbaceous_31 = format_Herbaceous_31.readFeatures(json_Herbaceous_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Herbaceous_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Herbaceous_31.addFeatures(features_Herbaceous_31);
var lyr_Herbaceous_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Herbaceous_31, 
                style: style_Herbaceous_31,
                popuplayertitle: "Herbaceous",
                interactive: true,
                title: '<img src="styles/legend/Herbaceous_31.png" /> Herbaceous'
            });
var format_Palms_cycads_al_32 = new ol.format.GeoJSON();
var features_Palms_cycads_al_32 = format_Palms_cycads_al_32.readFeatures(json_Palms_cycads_al_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Palms_cycads_al_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palms_cycads_al_32.addFeatures(features_Palms_cycads_al_32);
var lyr_Palms_cycads_al_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Palms_cycads_al_32, 
                style: style_Palms_cycads_al_32,
                popuplayertitle: "Palms_cycads_al",
                interactive: true,
                title: '<img src="styles/legend/Palms_cycads_al_32.png" /> Palms_cycads_al'
            });

lyr_map_0.setVisible(true);lyr_Pathsoriginal_1.setVisible(true);lyr_Stairs_2.setVisible(true);lyr_Generalveg_3.setVisible(true);lyr_Cannons_4.setVisible(true);lyr_Beds_5.setVisible(true);lyr_Merged_6.setVisible(true);lyr_Educationareas_7.setVisible(true);lyr_Dogpark_8.setVisible(true);lyr_Buildings_9.setVisible(true);lyr_Plantcollection_10.setVisible(true);lyr_Water_11.setVisible(true);lyr_ChildrensPark_12.setVisible(true);lyr_Statues_13.setVisible(true);lyr_TheDell_14.setVisible(true);lyr_Theatre_15.setVisible(true);lyr_Bridge_16.setVisible(true);lyr_WildlifePark_17.setVisible(true);lyr_Theatrefull_18.setVisible(true);lyr_Northpaths_19.setVisible(true);lyr_Gardensextent_20.setVisible(true);lyr_Office_area_21.setVisible(true);lyr_Mothtrap_22.setVisible(true);lyr_Wild_plants_23.setVisible(true);lyr_Succulents_24.setVisible(true);lyr_Vines_25.setVisible(true);lyr_Shrubs_26.setVisible(true);lyr_Aloes_27.setVisible(true);lyr_Bulbs_allies_28.setVisible(true);lyr_Epipytes_allies_29.setVisible(true);lyr_Grasses_allies_30.setVisible(true);lyr_Herbaceous_31.setVisible(true);lyr_Palms_cycads_al_32.setVisible(true);
var layersList = [lyr_map_0,lyr_Pathsoriginal_1,lyr_Stairs_2,lyr_Generalveg_3,lyr_Cannons_4,lyr_Beds_5,lyr_Merged_6,lyr_Educationareas_7,lyr_Dogpark_8,lyr_Buildings_9,lyr_Plantcollection_10,lyr_Water_11,lyr_ChildrensPark_12,lyr_Statues_13,lyr_TheDell_14,lyr_Theatre_15,lyr_Bridge_16,lyr_WildlifePark_17,lyr_Theatrefull_18,lyr_Northpaths_19,lyr_Gardensextent_20,lyr_Office_area_21,lyr_Mothtrap_22,lyr_Wild_plants_23,lyr_Succulents_24,lyr_Vines_25,lyr_Shrubs_26,lyr_Aloes_27,lyr_Bulbs_allies_28,lyr_Epipytes_allies_29,lyr_Grasses_allies_30,lyr_Herbaceous_31,lyr_Palms_cycads_al_32];
lyr_map_0.set('fieldAliases', {'fid': 'fid', 'unique_id': 'unique_id', 'featcode': 'featcode', 'inspireId': 'inspireId', 'source_layer': 'source_layer', });
lyr_Pathsoriginal_1.set('fieldAliases', {'FID': 'FID', });
lyr_Stairs_2.set('fieldAliases', {'id': 'id', });
lyr_Generalveg_3.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Cannons_4.set('fieldAliases', {'id': 'id', });
lyr_Beds_5.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Location': 'Location', });
lyr_Merged_6.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Location': 'Location', 'layer': 'layer', 'path': 'path', 'Newnum': 'Newnum', });
lyr_Educationareas_7.set('fieldAliases', {'id': 'id', });
lyr_Dogpark_8.set('fieldAliases', {'id': 'id', });
lyr_Buildings_9.set('fieldAliases', {'id': 'id', });
lyr_Plantcollection_10.set('fieldAliases', {'id': 'id', });
lyr_Water_11.set('fieldAliases', {'id': 'id', 'Location': 'Location', });
lyr_ChildrensPark_12.set('fieldAliases', {'id': 'id', });
lyr_Statues_13.set('fieldAliases', {'id': 'id', });
lyr_TheDell_14.set('fieldAliases', {'id': 'id', });
lyr_Theatre_15.set('fieldAliases', {'id': 'id', });
lyr_Bridge_16.set('fieldAliases', {'id': 'id', });
lyr_WildlifePark_17.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Theatrefull_18.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Northpaths_19.set('fieldAliases', {'id': 'id', });
lyr_Gardensextent_20.set('fieldAliases', {'id': 'id', });
lyr_Office_area_21.set('fieldAliases', {'id': 'id', });
lyr_Mothtrap_22.set('fieldAliases', {'id': 'id', });
lyr_Wild_plants_23.set('fieldAliases', {'Plantname': 'Plantname', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Succulents_24.set('fieldAliases', {'Plantnames': 'Plantnames', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Vines_25.set('fieldAliases', {'Plantname': 'Plantname', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Shrubs_26.set('fieldAliases', {'Plantname': 'Plantname', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Aloes_27.set('fieldAliases', {'Plant name': 'Plant name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Bulbs_allies_28.set('fieldAliases', {'Plantname': 'Plantname', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Epipytes_allies_29.set('fieldAliases', {'Plantname': 'Plantname', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Grasses_allies_30.set('fieldAliases', {'Plantname': 'Plantname', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Herbaceous_31.set('fieldAliases', {'Plantname': 'Plantname', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_Palms_cycads_al_32.set('fieldAliases', {'Plantname': 'Plantname', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accession': 'Accession', });
lyr_map_0.set('fieldImages', {'fid': 'TextEdit', 'unique_id': 'Range', 'featcode': 'Range', 'inspireId': 'Range', 'source_layer': 'TextEdit', });
lyr_Pathsoriginal_1.set('fieldImages', {'FID': 'TextEdit', });
lyr_Stairs_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Generalveg_3.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Cannons_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Beds_5.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', });
lyr_Merged_6.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Newnum': 'Range', });
lyr_Educationareas_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Dogpark_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Buildings_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Plantcollection_10.set('fieldImages', {'id': 'TextEdit', });
lyr_Water_11.set('fieldImages', {'id': 'TextEdit', 'Location': 'TextEdit', });
lyr_ChildrensPark_12.set('fieldImages', {'id': 'TextEdit', });
lyr_Statues_13.set('fieldImages', {'id': 'TextEdit', });
lyr_TheDell_14.set('fieldImages', {'id': 'TextEdit', });
lyr_Theatre_15.set('fieldImages', {'id': 'TextEdit', });
lyr_Bridge_16.set('fieldImages', {'id': 'TextEdit', });
lyr_WildlifePark_17.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Theatrefull_18.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Northpaths_19.set('fieldImages', {'id': 'TextEdit', });
lyr_Gardensextent_20.set('fieldImages', {'id': 'TextEdit', });
lyr_Office_area_21.set('fieldImages', {'id': 'TextEdit', });
lyr_Mothtrap_22.set('fieldImages', {'id': 'TextEdit', });
lyr_Wild_plants_23.set('fieldImages', {'Plantname': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_Succulents_24.set('fieldImages', {'Plantnames': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_Vines_25.set('fieldImages', {'Plantname': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_Shrubs_26.set('fieldImages', {'Plantname': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_Aloes_27.set('fieldImages', {'Plant name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accession': 'TextEdit', });
lyr_Bulbs_allies_28.set('fieldImages', {'Plantname': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_Epipytes_allies_29.set('fieldImages', {'Plantname': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_Grasses_allies_30.set('fieldImages', {'Plantname': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_Herbaceous_31.set('fieldImages', {'Plantname': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_Palms_cycads_al_32.set('fieldImages', {'Plantname': '', 'Latitude': '', 'Longitude': '', 'Accession': '', });
lyr_map_0.set('fieldLabels', {'fid': 'no label', 'unique_id': 'header label - visible with data', 'featcode': 'no label', 'inspireId': 'no label', 'source_layer': 'no label', });
lyr_Pathsoriginal_1.set('fieldLabels', {'FID': 'no label', });
lyr_Stairs_2.set('fieldLabels', {'id': 'no label', });
lyr_Generalveg_3.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_Cannons_4.set('fieldLabels', {'id': 'no label', });
lyr_Beds_5.set('fieldLabels', {'id': 'no label', 'Type': 'header label - visible with data', 'Location': 'header label - visible with data', });
lyr_Merged_6.set('fieldLabels', {'id': 'no label', 'Type': 'no label', 'Location': 'no label', 'layer': 'no label', 'path': 'no label', 'Newnum': 'no label', });
lyr_Educationareas_7.set('fieldLabels', {'id': 'no label', });
lyr_Dogpark_8.set('fieldLabels', {'id': 'no label', });
lyr_Buildings_9.set('fieldLabels', {'id': 'no label', });
lyr_Plantcollection_10.set('fieldLabels', {'id': 'no label', });
lyr_Water_11.set('fieldLabels', {'id': 'no label', 'Location': 'no label', });
lyr_ChildrensPark_12.set('fieldLabels', {'id': 'no label', });
lyr_Statues_13.set('fieldLabels', {'id': 'no label', });
lyr_TheDell_14.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_Theatre_15.set('fieldLabels', {'id': 'no label', });
lyr_Bridge_16.set('fieldLabels', {'id': 'no label', });
lyr_WildlifePark_17.set('fieldLabels', {'id': 'header label - visible with data', 'Type': 'no label', });
lyr_Theatrefull_18.set('fieldLabels', {'id': 'hidden field', 'Type': 'no label', });
lyr_Northpaths_19.set('fieldLabels', {'id': 'no label', });
lyr_Gardensextent_20.set('fieldLabels', {'id': 'no label', });
lyr_Office_area_21.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_Mothtrap_22.set('fieldLabels', {'id': 'no label', });
lyr_Wild_plants_23.set('fieldLabels', {'Plantname': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Succulents_24.set('fieldLabels', {'Plantnames': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Vines_25.set('fieldLabels', {'Plantname': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Shrubs_26.set('fieldLabels', {'Plantname': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Aloes_27.set('fieldLabels', {'Plant name': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Bulbs_allies_28.set('fieldLabels', {'Plantname': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Epipytes_allies_29.set('fieldLabels', {'Plantname': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Grasses_allies_30.set('fieldLabels', {'Plantname': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Herbaceous_31.set('fieldLabels', {'Plantname': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Palms_cycads_al_32.set('fieldLabels', {'Plantname': 'header label - always visible', 'Latitude': 'header label - always visible', 'Longitude': 'header label - always visible', 'Accession': 'header label - always visible', });
lyr_Palms_cycads_al_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});