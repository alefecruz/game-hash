angular.module('hashApp', [])
    .controller('hashController', function( ){
        "use strict";          
        var vm = this;
        
        vm.hashs = ['NotMarked','NotMarked','NotMarked','NotMarked','NotMarked','NotMarked','NotMarked','NotMarked','NotMarked'];
       
        vm.player = false;
        vm.winner = "";
        vm.scoreRed = 0;
        vm.scoreBlue = 0;
        
        vm.refresh = refresh;
        vm.active = active;
        vm.rules = rules;
        /*
            False is the Player PlayerOne
            True is The Player PlayerTwo
        */

        function active(pos){
            if(vm.hashs[pos]==="NotMarked"){
                if(vm.player== false)
                    vm.hashs[pos] = "PlayerOne"
                else
                    vm.hashs[pos] = "PlayerTwo"
                vm.player = !vm.player;
            }
            rules()
        }

        function refresh(){
            for(var i=0; i < vm.hashs.length; i++)
                vm.hashs[i] = "NotMarked";
        }

        function rules(){
            if(
                (vm.hashs[0] == "PlayerOne" && vm.hashs[1] == "PlayerOne" && vm.hashs[2] == "PlayerOne") ||
                (vm.hashs[3] == "PlayerOne" && vm.hashs[4] == "PlayerOne" && vm.hashs[5] == "PlayerOne") ||
                (vm.hashs[6] == "PlayerOne" && vm.hashs[7] == "PlayerOne" && vm.hashs[8] == "PlayerOne") ||
                (vm.hashs[0] == "PlayerOne" && vm.hashs[4] == "PlayerOne" && vm.hashs[8] == "PlayerOne") ||
                (vm.hashs[6] == "PlayerOne" && vm.hashs[4] == "PlayerOne" && vm.hashs[2] == "PlayerOne") ||
                (vm.hashs[0] == "PlayerOne" && vm.hashs[3] == "PlayerOne" && vm.hashs[6] == "PlayerOne") ||
                (vm.hashs[1] == "PlayerOne" && vm.hashs[4] == "PlayerOne" && vm.hashs[7] == "PlayerOne") ||
                (vm.hashs[2] == "PlayerOne" && vm.hashs[5] == "PlayerOne" && vm.hashs[8] == "PlayerOne")){
                    vm.winner = "PlayerOne";
                    vm.scoreRed++;
                    refresh();
            }
            else 
            if(
                (vm.hashs[0] == "PlayerTwo" && vm.hashs[1] == "PlayerTwo" && vm.hashs[2] == "PlayerTwo") ||
                (vm.hashs[3] == "PlayerTwo" && vm.hashs[4] == "PlayerTwo" && vm.hashs[5] == "PlayerTwo") ||
                (vm.hashs[6] == "PlayerTwo" && vm.hashs[7] == "PlayerTwo" && vm.hashs[8] == "PlayerTwo") ||
                (vm.hashs[0] == "PlayerTwo" && vm.hashs[4] == "PlayerTwo" && vm.hashs[8] == "PlayerTwo") ||
                (vm.hashs[6] == "PlayerTwo" && vm.hashs[4] == "PlayerTwo" && vm.hashs[2] == "PlayerTwo") ||
                (vm.hashs[0] == "PlayerTwo" && vm.hashs[3] == "PlayerTwo" && vm.hashs[6] == "PlayerTwo") ||
                (vm.hashs[1] == "PlayerTwo" && vm.hashs[4] == "PlayerTwo" && vm.hashs[7] == "PlayerTwo") ||
                (vm.hashs[2] == "PlayerTwo" && vm.hashs[5] == "PlayerTwo" && vm.hashs[8] == "PlayerTwo")){
                    vm.winner = "PlayerTwo";
                    vm.scoreBlue ++;
                    refresh();
            }
            else
            if( (vm.hashs[0] != "NotMarked" && vm.hashs[1] != "NotMarked" && vm.hashs[2] != "NotMarked") &&
                (vm.hashs[3] != "NotMarked" && vm.hashs[4] != "NotMarked" && vm.hashs[5] != "NotMarked") &&
                (vm.hashs[6] != "NotMarked" && vm.hashs[7] != "NotMarked" && vm.hashs[8] != "NotMarked") ){
                    vm.winner = "DRAW";
                    refresh();
            }
        }
        refresh();
    })