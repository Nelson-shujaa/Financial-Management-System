$(document).ready(function() {
  $("button#bnt1").click(function() {
    $("div.inputs1").toggle(1000);
    $("div.inputs2").hide(1000);
  });
  $("button#bnt2").click(function() {
    $("div.inputs2").toggle(1000);
    $("div.inputs1").hide(1000);
  });
  $("button#income-submit").click(function() {
    $("input#income").val('')
  });
  $("button#expenditure-submit").click(function() {
    $("input#expenditure").val('')
  });
  $("button#expenditure-submit").click(function() {
    $("input#date").val('')
  });
  $("button#new-category").click(function() {
    $('div#one').hide();
    $('button#expenditure-submit').hide();
    $('input#new').show();
    $("button#new-category").hide();
    $("button#add").show();
  });
  $("button#add").click(function() {
    var newCategory = $("input#new").val();
    $("select#expenditure").append("<option value='" + newCategory + "'>" + newCategory + "</option>");
    $("div#one").show();
    $("button#add").hide();
    $('button#expenditure-submit').show();
    $("button#new-category").show();
    $('input#new').hide();
  });
  $("button#new-category2").click(function() {
    $('div#two').hide();
    $('button#income-submit').hide();
    $('input#new2').show();
    $("button#new-category2").hide();
    $("button#add2").show();
  });
  $("button#add2").click(function() {
    var newCategory2 = $("input#new2").val();
    $("select#income").append("<option value='" + newCategory2 + "'>" + newCategory2 + "</option>");
    $("div#two").show();
    $("button#add2").hide();
    $('button#income-submit').show();
    $("button#new-category2").show();
    $('input#new2').hide();
  });
});
