function hoursCtrl($scope){
   
   $scope.tasks = [
      {time: 0},
      {time: 0},
      {time: 0},
      {time: 0}
   ]
   
   $scope.addTask = function(){
      if (($scope.newTaskHours == undefined) || ($scope.newTaskHours == 0)){
         alert("Add an actual value of Time!");
      }
      else if (($scope.newTaskHours < 0)){
      alert("How I wish, we could add back in Time!");
      }
      else{
         $scope.tasks.push({time:$scope.newTaskHours});
         $scope.newTaskHours = '';
      }
   }
   
   $scope.totalHours = function(){
      var totalH = 0;
      angular.forEach($scope.tasks, function(task){
         totalH += parseFloat(task.time);
      });
      return totalH;
   }
   
   $scope.getStatus = function(){
      var rem = $scope.targetHrs - $scope.totalHours();
      if (($scope.targetHrs == undefined)||($scope.targetHrs == 0))
         return 'Fill out <span class="text-primary">hours to be completed</span> to get a countdown';
      if (rem > 0){
         return "You need <span class='text-info'><strong>"+rem+"</strong></span> more hours to reach <strong class='text-warning'>"+$scope.targetHrs+"</strong> Hours";
      }
      if (rem < 0 ){
         return 'Too many hours reduce time by <strong class="text-danger">'+rem*-1+ '</strong> Hours';
      }
      if (rem == 0){
         return "<span class='text-success'>Bingo! you have compelted <strong class='text-success'>"+$scope.targetHrs+"</strong> hours today."
      }
      
      return rem;
   }
   
   $scope.remove=function(task){ 
     var index=$scope.tasks.indexOf(task)
     $scope.tasks.splice(index,1);     
   }   
   
}
