angular.module('app').controller("MainController", function($scope, $rootScope) {


  $scope.ratio1 = "";
  $scope.ratio2 = "";
  $scope.ratio3 = "";
  $scope.year1 = "";
  $scope.year2 = "";
  $scope.year3 = "";
  $scope.result = "";
  $scope.clicked = false;
  $scope.classification ="";

  $scope.getClassi = function (result){
    if(result >= 70) {
      $scope.classification = "First Class";
      return "First Class";
    } else if( result >= 60  && result <= 69 ){
        $scope.classification ="Second class, Upper";
        return "Second class, Upper";
    } else if( result >= 50 && result <= 59  ){
        $scope.classification = "Second class, Lower";
        return "Second class, Lower";
    } else if(result >= 40 && result<= 49){
        $scope.classification = "Third Class";
        return "Third Class";
    } else {
      $scope.classification = "Fail";
      return "Fail";
    }
  };

  $scope.calculate = function() {

    // if(checkFields()) {
    // $scope.restart();
    var sum = $scope.ratio1 + $scope.ratio2 + $scope.ratio3;
    console.log(sum);
    var year1grade = ($scope.ratio1 / sum) * $scope.year1;
    var year2grade = ($scope.ratio2 / sum) * $scope.year2;
    var year3grade = ($scope.ratio3 / sum) * $scope.year3;
    console.log(year1grade, year2grade, year3grade);

    var final = year1grade + year2grade + year3grade;
    console.log("final", final);

    if (isNaN(final)) {
      alert("Please fill in all fields and ensure number format");
    } else {
      $scope.result = final;

      //round to 2 dp
      $scope.result = Math.round(final * 100) / 100;
      console.log($scope.result);
      $scope.getClassi($scope.result);
      $scope.clicked = true;
    }



    $scope.getCategory = function(category) {
        category = $scope.classification;
      if (category == "First Class") {
        return "ui green ribbon label";
      } else if (category == "Second class, Upper") {
        return "ui teal ribbon label";
      } else if (category == "Second class, Lower") {
        return "ui purple ribbon label";
      } else if (category == "Third Class") {
        return "ui blue ribbon label";
      } else if (category == "Fail") {
        return "ui red ribbon label";
      }
        else {
        return "ui grey ribbon label";
      }
    };



    // } else {
    //   alert("Please fill in all fields");
    // }


  };

  $scope.restart = function() {
    $scope.clicked = false;
    $scope.ratio1 = "";
    $scope.ratio2 = "";
    $scope.ratio3 = "";
    $scope.year1 = "";
    $scope.year2 = "";
    $scope.year3 = "";
    $scope.result = 0;
  };

  //return true if all fields are filled in
  function checkFields() {

    if ($scope.ratio1 === "" || $scope.ratio2 === "" || $scope.ratio3 === "" || $scope.year1 === "" || $scope.year2 === "" || $scope.year3 === "") {
      return false;
    } else {
      return true;
    }
  }


  // console.log(grades(1,2,2,67,68,75));
});
