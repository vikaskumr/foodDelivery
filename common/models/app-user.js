'use strict';


var parser = require('xml2json');

let predifinedOutlets = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>Mamacita</name>
    <Style id="icon-1899-000000-nodesc-normal">
      <IconStyle>
        <color>ff000000</color>
        <scale>1</scale>
        <Icon>
          <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href>
        </Icon>
        <hotSpot x="32" xunits="pixels" y="64" yunits="insetPixels"/>
      </IconStyle>
      <LabelStyle>
        <scale>0</scale>
      </LabelStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <Style id="icon-1899-000000-nodesc-highlight">
      <IconStyle>
        <color>ff000000</color>
        <scale>1</scale>
        <Icon>
          <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href>
        </Icon>
        <hotSpot x="32" xunits="pixels" y="64" yunits="insetPixels"/>
      </IconStyle>
      <LabelStyle>
        <scale>1</scale>
      </LabelStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <StyleMap id="icon-1899-000000-nodesc">
      <Pair>
        <key>normal</key>
        <styleUrl>#icon-1899-000000-nodesc-normal</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#icon-1899-000000-nodesc-highlight</styleUrl>
      </Pair>
    </StyleMap>
    <Style id="icon-1899-0288D1-normal">
      <IconStyle>
        <color>ffd18802</color>
        <scale>1</scale>
        <Icon>
          <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href>
        </Icon>
        <hotSpot x="32" xunits="pixels" y="64" yunits="insetPixels"/>
      </IconStyle>
      <LabelStyle>
        <scale>0</scale>
      </LabelStyle>
    </Style>
    <Style id="icon-1899-0288D1-highlight">
      <IconStyle>
        <color>ffd18802</color>
        <scale>1</scale>
        <Icon>
          <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href>
        </Icon>
        <hotSpot x="32" xunits="pixels" y="64" yunits="insetPixels"/>
      </IconStyle>
      <LabelStyle>
        <scale>1</scale>
      </LabelStyle>
    </Style>
    <StyleMap id="icon-1899-0288D1">
      <Pair>
        <key>normal</key>
        <styleUrl>#icon-1899-0288D1-normal</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#icon-1899-0288D1-highlight</styleUrl>
      </Pair>
    </StyleMap>
    <Style id="icon-1899-0288D1-nodesc-normal">
      <IconStyle>
        <color>ffd18802</color>
        <scale>1</scale>
        <Icon>
          <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href>
        </Icon>
        <hotSpot x="32" xunits="pixels" y="64" yunits="insetPixels"/>
      </IconStyle>
      <LabelStyle>
        <scale>0</scale>
      </LabelStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <Style id="icon-1899-0288D1-nodesc-highlight">
      <IconStyle>
        <color>ffd18802</color>
        <scale>1</scale>
        <Icon>
          <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href>
        </Icon>
        <hotSpot x="32" xunits="pixels" y="64" yunits="insetPixels"/>
      </IconStyle>
      <LabelStyle>
        <scale>1</scale>
      </LabelStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <StyleMap id="icon-1899-0288D1-nodesc">
      <Pair>
        <key>normal</key>
        <styleUrl>#icon-1899-0288D1-nodesc-normal</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#icon-1899-0288D1-nodesc-highlight</styleUrl>
      </Pair>
    </StyleMap>
    <Style id="poly-000000-1200-77-nodesc-normal">
      <LineStyle>
        <color>ff000000</color>
        <width>1.2</width>
      </LineStyle>
      <PolyStyle>
        <color>4d000000</color>
        <fill>1</fill>
        <outline>1</outline>
      </PolyStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <Style id="poly-000000-1200-77-nodesc-highlight">
      <LineStyle>
        <color>ff000000</color>
        <width>1.8</width>
      </LineStyle>
      <PolyStyle>
        <color>4d000000</color>
        <fill>1</fill>
        <outline>1</outline>
      </PolyStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <StyleMap id="poly-000000-1200-77-nodesc">
      <Pair>
        <key>normal</key>
        <styleUrl>#poly-000000-1200-77-nodesc-normal</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#poly-000000-1200-77-nodesc-highlight</styleUrl>
      </Pair>
    </StyleMap>
    <Style id="poly-0288D1-1200-77-nodesc-normal">
      <LineStyle>
        <color>ffd18802</color>
        <width>1.2</width>
      </LineStyle>
      <PolyStyle>
        <color>4dd18802</color>
        <fill>1</fill>
        <outline>1</outline>
      </PolyStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <Style id="poly-0288D1-1200-77-nodesc-highlight">
      <LineStyle>
        <color>ffd18802</color>
        <width>1.8</width>
      </LineStyle>
      <PolyStyle>
        <color>4dd18802</color>
        <fill>1</fill>
        <outline>1</outline>
      </PolyStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <StyleMap id="poly-0288D1-1200-77-nodesc">
      <Pair>
        <key>normal</key>
        <styleUrl>#poly-0288D1-1200-77-nodesc-normal</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#poly-0288D1-1200-77-nodesc-highlight</styleUrl>
      </Pair>
    </StyleMap>
    <Placemark>
      <name>Landstraßer Hauptstraße 163 (Pizzeria Stefano)</name>
      <description>Mamacita</description>
      <styleUrl>#icon-1899-0288D1</styleUrl>
      <Point>
        <coordinates>
          16.4002954,48.1914916,0
        </coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>au_vienna_landstrasserhauptstr</name>
      <styleUrl>#poly-0288D1-1200-77-nodesc</styleUrl>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <tessellate>1</tessellate>
            <coordinates>
              16.370487,48.1958732,0
              16.3733142,48.1912459,0
              16.3760662,48.1867045,0
              16.377182,48.186919,0
              16.384886,48.184458,0
              16.385551,48.179364,0
              16.386731,48.177247,0
              16.3915376,48.1786901,0
              16.40114,48.1814898,0
              16.409111,48.1839433,0
              16.4139176,48.1853167,0
              16.419003,48.1867616,0
              16.4232625,48.1880656,0
              16.4171953,48.1909968,0
              16.4201832,48.1964458,0
              16.4156565,48.2003611,0
              16.4063559,48.2093724,0
              16.3931894,48.2167239,0
              16.3926635,48.2161157,0
              16.3929372,48.214461,0
              16.3926315,48.2129348,0
              16.3905609,48.2133639,0
              16.3884901,48.2134212,0
              16.384888,48.2122159,0
              16.3842308,48.2091696,0
              16.3825088,48.206666,0
              16.380685,48.2071572,0
              16.379516,48.206751,0
              16.3744998,48.2028537,0
              16.3688982,48.1983341,0
              16.370487,48.1958732,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
    <Placemark>
      <name>Dreyhausenstraße 17 (Il Primo)</name>
      <styleUrl>#icon-1899-0288D1-nodesc</styleUrl>
      <Point>
        <coordinates>
          16.3035454999999,48.197267,0
        </coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>au_vienna_dreyhausenstr</name>
      <styleUrl>#poly-0288D1-1200-77-nodesc</styleUrl>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <tessellate>1</tessellate>
            <coordinates>
              16.2567616,48.1682608,0
              16.272768,48.1664897,0
              16.2911566,48.1711551,0
              16.315566,48.171186,0
              16.3135817,48.1748415,0
              16.3191605,48.1841722,0
              16.3184807,48.1981182,0
              16.3384759,48.1982253,0
              16.3323389,48.2076182,0
              16.3251721,48.2081218,0
              16.3201973,48.2099023,0
              16.3176155,48.2149509,0
              16.3101482,48.2156372,0
              16.3020804,48.22073,0
              16.2922948,48.2231915,0
              16.283068,48.2253072,0
              16.2530708,48.2056849,0
              16.2567616,48.1682608,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
    <Placemark>
      <name>Randhartingergasse 9 (Pizzeria Tomato)</name>
      <styleUrl>#icon-1899-0288D1-nodesc</styleUrl>
      <Point>
        <coordinates>
          16.3925148000001,48.1739358,0
        </coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>au_vienna_randhartingergasse</name>
      <styleUrl>#poly-0288D1-1200-77-nodesc</styleUrl>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <tessellate>1</tessellate>
            <coordinates>
              16.377182,48.186919,0
              16.3419914,48.1805096,0
              16.3505745,48.1690622,0
              16.3608742,48.1508555,0
              16.408596,48.1410052,0
              16.4446449,48.1525734,0
              16.453743,48.1778769,0
              16.4232625,48.1880656,0
              16.386731,48.177247,0
              16.385551,48.179364,0
              16.384886,48.184458,0
              16.377182,48.186919,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
    <Placemark>
      <name>Kreuzgasse 54 (Luciano)</name>
      <styleUrl>#icon-1899-0288D1-nodesc</styleUrl>
      <Point>
        <coordinates>
          16.3356131,48.224525,0
        </coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>au_vienna_kreuzgasse</name>
      <styleUrl>#poly-0288D1-1200-77-nodesc</styleUrl>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <tessellate>1</tessellate>
            <coordinates>
              16.3307481,48.241138,0
              16.3240516,48.2425116,0
              16.3188586,48.2447431,0
              16.3101899,48.2409679,0
              16.3014346,48.2279898,0
              16.3033658,48.2238154,0
              16.3029807,48.2221622,0
              16.3020804,48.22073,0
              16.3101482,48.2156372,0
              16.3176155,48.2149509,0
              16.3201973,48.2099023,0
              16.3251721,48.2081218,0
              16.3323389,48.2076182,0
              16.3388073,48.2078499,0
              16.3407694,48.2129248,0
              16.34182,48.215523,0
              16.3430642,48.2266811,0
              16.344223,48.237594,0
              16.3402324,48.2413669,0
              16.3307481,48.241138,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
    <Placemark>
      <name>Schönbrunner Str. 156 (Bella Italia)</name>
      <styleUrl>#icon-1899-0288D1-nodesc</styleUrl>
      <Point>
        <coordinates>
          16.3402707,48.1866199,0
        </coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>au_vienna_schoenbrunnerstr</name>
      <styleUrl>#poly-0288D1-1200-77-nodesc</styleUrl>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <tessellate>1</tessellate>
            <coordinates>
              16.3156304,48.1712003,0
              16.3159847,48.1654413,0
              16.3515186,48.1674021,0
              16.3492125,48.1709866,0
              16.3420558,48.1805239,0
              16.3761306,48.1867188,0
              16.3689626,48.1983484,0
              16.3460055,48.208053,0
              16.3323389,48.2076182,0
              16.3342802,48.2046433,0
              16.3384759,48.1982253,0
              16.3184807,48.1981182,0
              16.3192249,48.1841865,0
              16.3136461,48.1748558,0
              16.3156304,48.1712003,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
    <Placemark>
      <name>Maurer Hauptpl. 2 (Il Gabbiano)</name>
      <styleUrl>#icon-1899-0288D1-nodesc</styleUrl>
      <Point>
        <coordinates>
          16.2685701,48.1508934,0
        </coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>au_vienna_maurerhauptplatz</name>
      <styleUrl>#poly-0288D1-1200-77-nodesc</styleUrl>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <tessellate>1</tessellate>
            <coordinates>
              16.2567616,48.1682608,0
              16.2503242,48.1568679,0
              16.2533283,48.1467323,0
              16.2412262,48.1391151,0
              16.2455177,48.122674,0
              16.2621689,48.1174598,0
              16.2703228,48.1148813,0
              16.2775326,48.1147093,0
              16.2898064,48.1160846,0
              16.3134098,48.1214708,0
              16.3185597,48.1254814,0
              16.3190747,48.1272574,0
              16.315566,48.171186,0
              16.2911566,48.1711551,0
              16.272768,48.1664897,0
              16.2567616,48.1682608,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
    <Placemark>
      <name>Wallensteinstraße 5 (Own)</name>
      <styleUrl>#icon-1899-000000-nodesc</styleUrl>
      <Point>
        <coordinates>
          16.3667181000001,48.2280211,0
        </coordinates>
      </Point>
    </Placemark>
    <Placemark>
      <name>au_vienna_wallensteinstr</name>
      <styleUrl>#poly-000000-1200-77-nodesc</styleUrl>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <tessellate>1</tessellate>
            <coordinates>
              16.338042,48.252171,0
              16.334353,48.246854,0
              16.344223,48.237594,0
              16.34182,48.215523,0
              16.3388073,48.2078499,0
              16.3460055,48.208053,0
              16.3688982,48.1983341,0
              16.379516,48.206751,0
              16.380685,48.2071572,0
              16.3825088,48.206666,0
              16.3842308,48.2091696,0
              16.384888,48.2122159,0
              16.3884901,48.2134212,0
              16.3905609,48.2133639,0
              16.3926315,48.2129348,0
              16.3930821,48.2143785,0
              16.3926635,48.2161157,0
              16.3930552,48.2167125,0
              16.3941766,48.2197113,0
              16.4071357,48.2270163,0
              16.3783839,48.2531412,0
              16.3674149,48.2655494,0
              16.358933,48.261729,0
              16.345317,48.260372,0
              16.341604,48.255086,0
              16.338042,48.252171,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
    <Placemark>
      <name>au_vienna_wallensteinstr</name>
      <styleUrl>#poly-000000-1200-77-nodesc</styleUrl>
      <Polygon>
        <outerBoundaryIs>
          <LinearRing>
            <tessellate>1</tessellate>
            <coordinates>
              16.37415,48.269107,0
              16.3871384,48.2524553,0
              16.4114986,48.2290989,0
              16.4262541,48.237225,0
              16.422269,48.24061,0
              16.403318,48.248318,0
              16.391182,48.273027,0
              16.37415,48.269107,0
            </coordinates>
          </LinearRing>
        </outerBoundaryIs>
      </Polygon>
    </Placemark>
  </Document>
</kml>`


module.exports = function (AppUser) {

  AppUser.fetchCoordinates = function (address, callback) {

    let predifinedOutlet = parser.toJson(predifinedOutlets, { object: true, });

    // console.log('jsonResponse', JSON.stringify(jsonResponse, null, 2));

    const promise = new Promise((resolve, reject) => {
      AppUser.app.models.LocationModel.fetchCoordinates(address)
        .then((addressCoordinates) => {

          // console.log('predifinedOutlets', JSON.stringify(predifinedOutlet.kml.Document.Placemark, null, 2));

          let places = predifinedOutlet.kml.Document.Placemark;

          let coordinates = addressCoordinates.results[0].geometry.location;

          let placeFound = 'Not Found';

          for (let i = 0; i < places.length; i++) {

            if (places[i].Polygon) {

              let predifinedCoordinates = places[i].Polygon.outerBoundaryIs.LinearRing.coordinates;

              if (String(predifinedCoordinates).includes(coordinates.lat)) {
                placeFound = places[i].name;
                break;
              }
            }
          }

          return resolve(placeFound);
        })
        .catch(reject);
    });

    if (callback !== null && typeof callback === 'function') {
      promise.then(function (data) { return callback(null, data); }).catch(function (err) { return callback(err); });
    } else {
      return promise;
    }

  };

  AppUser.remoteMethod('fetchCoordinates', {
    accepts: [
      {
        arg: 'address',
        type: 'string',
        http: {
          source: 'query'
        }
      }
    ],
    returns: {
      arg: 'data',
      type: 'object',
      root: true
    },
    http: {
      path: '/fetchCoordinates',
      verb: 'GET'
    },
    description: 'fetchCoordinates'
  });

};