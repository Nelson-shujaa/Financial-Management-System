<<<<<<< HEAD
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

=======
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
>>>>>>> origin/input-forms
});
