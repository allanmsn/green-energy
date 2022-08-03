let btn = document.querySelectorAll('.controls button');
let dc = document.querySelector('.dynamic-content');

const imagesList = [
   "./images/image-1.jpg",
   "./images/image-2.jpg",
   "./images/image-3.jpg"
];

function preloader() {
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }
    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

// resources
let stock = {
    c1: {
        heading: 'Solar Energy',
        bodyText: 'Solar energy is energy from the sun in the form of radiated heat and light. The sun’s radiant energy can be used to provide lighting and heat for buildings and to produce electricity. Historically, solar energy has been harnessed through passive solar technologies. Typically, these involve the strategic location of buildings and various elements of these buildings, such as windows, overhangs and thermal masses. Such practices take advantage of the sun for lighting and space heating to significantly reduce the use of electrical or mechanical equipment. Solar energy can be harnessed only during the day and only if the sunlight is not blocked by clouds, buildings or other obstacles. Today, two active solar technologies that involve electrical or mechanical equipment are becoming more common. First, solar collectors or panels are used to heat water or ventilation air for use in buildings. Second, solar photovoltaic technology uses solar cells to convert sunlight directly into electricity. The potential for solar energy varies across Canada. The potential is lower in coastal areas, due to increased cloud coverage, and is higher in the central regions. The solar potential varies even more around the globe. In general, many Canadian cities have a solar potential that is comparable internationally with that of many major cities. For instance, about half of Canada’s residential electricity requirements could be met by installing solar panels on the roofs of residential buildings. Canada’s use of solar energy has increased in recent years, although it remains relatively small in terms of market penetration. Installed capacity for solar thermal power has seen annual compound growth rate of 13.8 per cent since 2004. The 2008-2014 period was marked by the significant growth of installed capacity for solar photovoltaic power, which in 2014, reached 1,843 megawatts of installed capacity.',
        imageSrc: imagesList[0],
        imageAlt: 'Solar Panel'
    },
    c2: {
        heading: 'Wind Power',
        bodyText: 'The kinetic energy in wind can be converted into useful forms of energy such as mechanical energy or electricity. Wind energy has been harnessed for centuries to propel sailing vessels and turn grist mills and water pumps. Today, wind is used increasingly to generate electricity. Turbines with large propellers are erected on ‘wind farms’ located in strategic areas that have good wind regimes and that are in proximity to existing electrical grids. Wind energy is captured only when the wind speed is sufficient to move the turbine blades, but not in high winds when the turbine might be damaged if operated. Canada has large areas with excellent wind resources and therefore a significant potential for the expansion of wind-generated power. Some of the highest quality areas are offshore and along coastlines. No offshore wind farms have been built in Canada yet, and the development of coastal wind farms is limited because most of Canada’s coastline is in remote regions, away from the existing electrical grid. There are also high quality areas inland at different locations across Canada, including the southern Prairies and along the Gulf of St. Lawrence. Installed wind power capacity in Canada has expanded rapidly in recent years and is forecasted to continue to grow at a rapid pace due to increased interest from electricity producers and governmental initiatives. As of December 31, 2014, Canada had over 5,130 wind turbines operating on 225 wind farms for a total installed capacity of 9,694 megawatts, compared with only 60 wind turbines, 8 wind farms and 27 megawatts in 1998. The provincial leaders in wind power capacity are Ontario, Quebec, and Alberta.',
        imageSrc: imagesList[1],
        imageAlt: 'Wind Turbine'
    },
    c3: {
        heading: 'Hydroelectricity',
        bodyText: 'The natural flow of water in rivers offers kinetic power that can be transformed into usable energy. Early usages included mechanical power for transformation activities, such as milling and sawing, and for irrigation. As well, rivers have been used for transportation purposes, such as moving logs from forests to industrial centers. Currently, hydroelectricity is the major form of usable energy produced from flowing water. To produce hydroelectricity, the water flow is directed at the blades of a turbine, making it spin, which causes an electrical generator connected to the turbine to spin as well and thus generate electricity. The amount of energy extracted from flowing water depends on the volume of water and its speed. Usually, a hydroelectric station is built at a sharp incline or waterfall to take advantage of the speed gained by the water as a result of gravity. Dams are built at some locations to help regulate the flow of water and, therefore, the electricity generation. Canada has many rivers flowing from mountainous areas toward its three bordering oceans. In 2014, Canada had 542 hydroelectric stations with 78,359 megawatts of installed capacity. These stations include 379 small hydroelectric facilities, that is, facilities with a nameplate capacity of 50 megawatts or less, and they together represent 3.6 gigawatts, which is about 4.6 per cent of Canada’s installed capacity.',
        imageSrc: imagesList[2],
        imageAlt: 'Hydro power'
    }
};

dc.innerHTML = `<div>
                    <h1>${stock.c1.heading}</h1>
                    <div class="box">
                        <img class="float-left" src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}">
                        <p>${stock.c1.bodyText}</p>
                    </div>
                    <div class="clear"></div>
                </div>`;

function handleSelection(ev) {
    let currentBtn = ev.target;
    for (let i=0; i<btn.length; i++) {
        if (btn[i].hasAttribute('id','active-button')) {
            btn[i].removeAttribute('id', 'active-button');
        }
        currentBtn.setAttribute('id', 'active-button');
    }
    console.log(currentBtn.textContent);
    if (currentBtn.textContent === 'Solar') {
        dc.innerHTML = `<div>
                            <h1>${stock.c1.heading}</h1>
                            <div class="box">
                                <img class="float-left" src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}">
                                <p>${stock.c1.bodyText}</p>
                            </div>
                            <div class="clear"></div>
                        </div>`;
        } else if (currentBtn.textContent === 'Wind') {
            dc.innerHTML = `<div>
                                <h1>${stock.c2.heading}</h1>
                                <div class="box">
                                    <img class="float-left" src="${stock.c2.imageSrc}" alt="${stock.c2.imageAlt}">
                                    <p>${stock.c2.bodyText}</p>
                                </div>
                                <div class="clear"></div>
                            </div>`;
        } else if (currentBtn.textContent === 'Hydro') {
            dc.innerHTML = `<div>
                                <h1>${stock.c3.heading}</h1>
                                <div class="box">
                                    <img class="float-left" src="${stock.c3.imageSrc}" alt="${stock.c3.imageAlt}">
                                    <p>${stock.c3.bodyText}</p>
                                </div>
                                <div class="clear"></div>
                            </div>`;
        }
}

for (let btns of btn) {
    btns.addEventListener('click', handleSelection);
}