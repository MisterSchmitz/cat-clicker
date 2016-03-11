$(function(){

    var model = {
        init: function() {
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([{
                    "id" : 0,
                    "name" : "Cat1",
                    "image" : "cat1.jpg",
                    "count" : 0
                },
                {
                    "id" : 1,
                    "name" : "Cat2",
                    "image" : "cat1.jpg",
                    "count" : 0
                },
                {
                    "id" : 2,
                    "name" : "Cat3",
                    "image" : "cat1.jpg",
                    "count" : 0
                },
                {
                    "id" : 3,
                    "name" : "Cat4",
                    "image" : "cat1.jpg",
                    "count" : 0
                },
                {
                    "id" : 4,
                    "name" : "Cat5",
                    "image" : "cat1.jpg",
                    "count" : 0
                }]);
            };
        },

        getCats: function() {
            return JSON.parse(localStorage.cats);
        },

        getCat: function(id) {
            return JSON.parse(localStorage.cats)[id-1];
        }
    };

    var octopus = {
        init: function() {
            model.init();
            viewNav.init();
            viewMain.init();
        },

        getCats: function() {
            return model.getCats();
        },

        displayCat: function(id) {
            // Get cat-button that was clicked

            // Get data for cat that was clicked
            console.log(model.getCat(id));
            // viewMain.render(cat);
        },

        increaseCount: function() {
            // Get cat that was clicked
            // Get count for cat
            // Add 1 to count
            // Write back to model
            // Re-render viewMain
            viewMain.render();
        }

    };

    var viewNav = {
        init: function() {
            this.cats = $('#cat-list');

            // Delegated event to listen for cat selection clicks
            this.cats.on('click', '.cat-button', function(e) {
                octopus.displayCat(e.target);
                return false;
            });

            this.render();
        },

        render: function(){
            var htmlStr = '';
            octopus.getCats().forEach(function(cat){
                // Generate each cat as clickable list item
                htmlStr += '<li id="'+cat.id+'" class="cat-button">'+
                    cat.name+
                    '</li>';
                $(this).data('cat-id', cat.id);
            });
            this.cats.html( htmlStr );
        }
    };

    var viewMain = {
        init: function() {
            this.main = $('#cat-main');
            viewMain.render();
        },

        render: function(){
            var htmlStr = '';
            //     // Generate cat image
            //     htmlStr += '<img class="cat-image" src="' +
            //         mainCat.data('image')+
            //         '"/>';
            this.main.html( htmlStr );
        }
    };

    octopus.init();
});
