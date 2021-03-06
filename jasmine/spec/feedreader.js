/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined and URL is not empty', function() {
           allFeeds.forEach(function(feed) {
               var feedUrl = feed.url;
              /*  storing it in a variable so that it is more efficient */
               expect(feedUrl).toBeDefined();
               expect(feedUrl.length).not.toBe(0);
           });
       });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('allFeeds object name is defined', function() {
           allFeeds.forEach(function(feed) {
             var feedName = feed.name;
             expect(feedName).toBeDefined();
             expect(feedName.length).not.toBe(0);
           });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('Hidden by default', function() {
            //hasClass checks whether a class is present on the screen or not using boolean values.
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('Menu changing visibility', function() {
            $('.menu-icon-link').click(); //This sets the class menu-icon-link to be triggered when it is clicked.
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
      });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
           loadFeed(0, done);
         }); // Loads the Feed Before Testing the Spec

         it('Has atleast 1 Entry when loaded', function() {
           expect($('.feed .entry').length).toBeGreaterThan(0);
         });
       });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      var feedbefore;
      var feedafter;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(function(done) {
           loadFeed(0, function() { //This loads the feed at position 1.
             feedbefore = $('.feed').html(); //We can use this loaded feed as our feed before testing.
             done();
           });
         });

         it('When new feed is loaded content changes', function(done) {
           loadFeed(1, function() {
             feedafter = $('.feed').html();
             expect(feedafter).not.toEqual(feedbefore);
             done();
           });
         });
       });
}());
