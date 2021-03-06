/* GET 'home' page. */
// module.exports.homelist = function(req,res){
//     res.render('index', {title:'Home'});
// };
module.exports.homelist = function(req,res){
    res.render('locations-list', {
        title:'WifiSpoof',
        pageHeader : {
            title:'WifiSpoof',
            strapline: 'Find place to work with wifi near you!'
        },
        sidebar : "Looking for wifi and a seat? WifiSpoof helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let WifiSpoof help you find the place you're loooking for.",
        locations:[
            {
                name:'Starcups',
                address:'125 High Street, Reading, RG6 1PS',
                rating: 3, 
                facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
                distance: '100m'
            },
            {
                name:'Cafe Hero',
                address:'125 High Street, Reading, RG6 1PS',
                rating: 4, 
                facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
                distance: '200m'
            },
            {
                name:'Burger Queen',
                address:'125 High Street, Reading, RG6 1PS',
                rating: 2, 
                facilities: [ 'Food', 'Premium Wifi'],
                distance: '250m'
            },
        ]
    });
};


/* GET 'Location Info' page */
module.exports.locationInfo = function(req,res){
    res.render('location-info', {title:'Location Info'});
};

/* GET 'Add Review' page */
module.exports.addReview = function(req,res){
    res.render('location-review-form', {title:'Add Review'});
};

