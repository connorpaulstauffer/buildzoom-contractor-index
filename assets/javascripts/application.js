$(function () {
  $(".filter-toggle").on("click", toggleFilters);

  function toggleFilters(event) {
    if ($(event.target).attr("id") == "show-filters") {
      $("#hide-filters").removeClass("hidden");
      $("#show-filters").addClass("hidden");
      $("#filter-container").removeClass("hidden");
    } else {
      $("#hide-filters").addClass("hidden");
      $("#show-filters").removeClass("hidden");
      $("#filter-container").addClass("hidden");
    }
  }
});
