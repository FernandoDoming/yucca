var $container = $('.gallery .row');
$container.imagesLoaded(function () {
  $container.masonry({
    itemSelector: 'figure'
  });
});

$container.find('figure').on('click', function () {
  $(this).addClass('open');
});

$(document).on('click', 'figure.open .close', function () {
  $(this).parent('figure.open').removeClass('open');
});

var $categories = $('.gallery ul.categories');
$categories.find('li').click(function () {
  $categories.find('li.active').removeClass('active');
  $(this).addClass('active');
  filterCategory( $(this).text() );
});

function filterCategory(category) {
  var $gallery = $('.gallery');

  $gallery.find('.category-container').removeClass('hide');
  if (category != 'All') {
    $gallery.find('.category-container:not(#' + category + ')')
            .addClass('hide');
  }
}