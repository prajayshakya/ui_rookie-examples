angular.module('app').directive('appTitle',function(){
        return{
                    restrict:'EAMC', 
                   //template:'<h1>hello world</h1>'
                    templateUrl:'/views/title.html',
                    controller: function($scope)
                        {
                            $scope.title = 'Shopping Cart';
                         },
                    link: function(scope)
                        {
                            //console.log(scope.title); 
                            scope.title = 'directive shopping cart';
                        }
                };
        });