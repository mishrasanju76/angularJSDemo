
var myApp =  angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
     .when("/books",{
        templateUrl: "partials/book-list.html",
        controller: "BookListCtrl"
    })
    .when("/kart",{
        templateUrl: "partials/kart-list.html",
        controller: "KartListCtrl"
    })
    .otherwise({
        redirectTo: "/books"
    })
});

myApp.factory("bookService",function(){
    var books = [
               {
            imgUrl: "ThinkingInJava.jpg",
            name:  "Thinking in Java",
            price : 205,
            rating: 4,
            binding: "Paperback",
            details: "Basic Java book with depth knowledge"
        },
        {
            imgUrl: "CR.jpg",
            name: "Complete Reference",
            price : 405,
            rating: 1,
            binding: "Paperback",
            details: "Basic Java book "
        }
     ];
              
    return{
              getBooks: function(){
                return books;
                }
        }
});

myApp.factory("kartService",function(){
   var kart = [];
   return {
       getKart: function(){
           return kart;
       },
       addToKart: function(book){
           kart.push(book);
       },
       buy: function(book){
           alert("Thanks for Buying", book.name);
       }
   }
    
});
myApp.controller("KartListCtrl",function($scope,kartService){
                 $scope.kart = kartService.getKart();
                 $scope.buy = function(book){
                    kartService.buy(book);
    }
});

myApp.controller("HeaderCtrl",function($scope){
    $scope.appDetails = {};
    $scope.appDetails.title = "BookCart";
    $scope.appDetails.tagline = "we have 1 millions books for you";
    
});

myApp.controller("BookListCtrl",function($scope,bookService,kartService){
    $scope.books= bookService.getBooks();
   
    
    $scope.addToKart= function(book){
        kartService.addToKart(book);
    }
}
);

