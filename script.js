function toggleDone() {
var checkbox = this;

$(checkbox).parent().toggleClass("completed");
}
$(document).ready(function() {
$("input[type=checkbox]").bind('change', toggleDone);
updateCounters(); // Just add this line
});
