window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	black: 'rgb(0, 0, 0)'
};

(function(global) {
	var Months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];


	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		srand: function(seed) {
			this._seed = seed;
		},


		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 500;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;


			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = Months[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		transparentize: function(color, opacity) {
			 var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};
	if (document.location.hostname.match(/^(www\.)?chartjs\.org$/)) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-28909194-3', 'auto');
		ga('send', 'pageview');
	}
});
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
		var income= document.getElementById("income");
		var i = income.options[income.selectedIndex].value;
		var money=$("input#income").val();
		if (i=="Salary") {
 		$("td#salary").append(money);
		console.log(money)
		}
		else if(i=="Gifts"){
			$("td#gifts").append(money);
		}
		else if(i=="Loans"){
			$("td#loans").append(money);
		}
		else if(i=="Allowances"){
			$("td#allowances").append(money);
		}
		else if(i=="Wages"){
			$("td#wages").append(money);
		}
		else {
			$("td#commissions").append(money);
		}
		$("div.cont1").hide();
		$("div.cont").toggle(1000);
		$("input#income").val('');
  });
  $("button#expenditure-submit").click(function() {
    $("input#expenditure").val('')
  });
  $("button#expenditure-submit").click(function() {
    $("input#date").val('');
		$("div.cont1").hide();
		$("div.cont").toggle(1000);
  });
  $("button#new-category").click(function() {
    $('div#one').hide();
    $('button#expenditure-submit').hide();
    $('input#new').toggle(1000);
    $("button#new-category").hide();
    $("button#add").toggle(1000);
  });
  $("button#add").click(function() {
    var newCategory = $("input#new").val();
    $("select#expenditure").append("<option value='" + newCategory + "'>" + newCategory + "</option>");
    $("div#one").toggle(1000);
    $("button#add").hide();
    $('button#expenditure-submit').toggle(1000);
    $("button#new-category").toggle(1000);
    $('input#new').hide();
  });
  $("button#new-category2").click(function() {
    $('div#two').hide();
    $('button#income-submit').hide();
    $('input#new2').toggle(1000);
    $("button#new-category2").hide();
    $("button#add2").toggle(1000);
  });
  $("button#add2").click(function() {
    var newCategory2 = $("input#new2").val();
    $("select#income").append("<option value='" + newCategory2 + "'>" + newCategory2 + "</option>");
    $("div#two").toggle(1000);
    $("button#add2").hide();
    $('button#income-submit').toggle(1000);
    $("button#new-category2").toggle(1000);
    $('input#new2').hide();
  });
	$("button#analysis").click(function(){
		$("div.cont").hide();
		$("div.chart").show();
	});
});
