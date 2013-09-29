function hoursCtrl($scope){
   
   $scope.tasks = [
      {time: 0}
   ]
   
   $scope.addTask = function(){
      if (($scope.newTaskHours == undefined) || ($scope.newTaskHours == 0)){
         alert("Enter a Non Zero value");
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
   
   $scope.remove=function(task){ 
     var index=$scope.tasks.indexOf(task)
     $scope.tasks.splice(index,1);     
   }   
   
}
