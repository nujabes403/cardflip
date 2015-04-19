/**
 * Created by KIM on 2015-04-20.
 */
angular.module('flipApp',[])
.controller('flipCardCtrl',function($scope,$http){
        $scope.imgs = [
            {path:'./imgs/A_clover_black.png',flipped:false},
            {path:'./imgs/A_diamond_red.png',flipped:false},
            {path:'./imgs/A_clover_black.png',flipped:false},
            {path:'./imgs/A_heart_red.png',flipped:false},
        ];
        $scope.defaultImg = './imgs/flipped.png';
        $scope.flipCount = 0;
        $scope.onCards =[];
        $scope.score = 0;

        $scope.flip = function(img){
            img.flipped = true;
            $scope.onCards.push(img);
            $scope.flipCount++;

            //check flipCount
            if($scope.flipCount == 2){
                //correct card
                if($scope.onCards[0].path == $scope.onCards[1].path){
                            console.log("It's Correct!");
                            $scope.score+=10;
                }
                //incorrect card
                else{
                    console.log("Wrong!");
                    for(var i = 0 ; i < $scope.onCards.length ; i ++){
                        $scope.onCards[i].flipped = false;
                    }
                }
                //reset onCards & flipCount
                $scope.onCards=[];
                $scope.flipCount = 0;
                }
        };
    });