"use strict";
var Portfolio = (function () {
    function Portfolio() {
    }
    return Portfolio;
}());
exports.Portfolio = Portfolio;
var PortfolioSec = (function () {
    function PortfolioSec() {
    }
    return PortfolioSec;
}());
exports.PortfolioSec = PortfolioSec;
exports.PORTFOLIOS = [
    { large_img: '/images/fullsize/software-sized.jpg',
        thumbnail_img: '/images/thumbnails/software-sized.jpg',
        product_cat: 'Draw & Quote',
        project: 'IT Sales' },
    { large_img: '/images/fullsize/dirty-industry-stack-factory-sized.jpg',
        thumbnail_img: '/images/thumbnails/dirty-industry-stack-factory-sized.jpg',
        product_cat: 'Draw & Quote',
        project: 'Industrial Sales' },
    { large_img: '/images/fullsize/it_switch_sized.jpg',
        thumbnail_img: '/images/thumbnails/it_switch_sized.jpg',
        product_cat: 'Draw & Quote',
        project: 'Network Equipment Sales' },
    { large_img: '/images/fullsize/diagram_sample.PNG',
        thumbnail_img: '/images/thumbnails/diagram_sample_sized.png',
        product_cat: 'IT/Industrial Application',
        project: 'Draw the Solution' },
    { large_img: '/images/fullsize/prod_config_size.png',
        thumbnail_img: '/images/thumbnails/prod_config_size.png',
        product_cat: 'Configure Products In Drawing',
        project: 'Configuration' },
    { large_img: '/images/fullsize/BOM.PNG',
        thumbnail_img: '/images/thumbnails/BOM_sized.png',
        product_cat: 'Rapidly Generate Bill of Materials',
        project: 'Quotation' }
];
exports.PORTFOLIOSECS = [
    { portsec: [exports.PORTFOLIOS[0], exports.PORTFOLIOS[1]] },
    { portsec: [exports.PORTFOLIOS[2], exports.PORTFOLIOS[3]] },
    { portsec: [exports.PORTFOLIOS[4], exports.PORTFOLIOS[5]] }
];
//# sourceMappingURL=mock-homefiles.js.map