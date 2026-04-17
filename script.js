$(document).ready(function () {
  // Star toggle
  $('.todo-star').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).html('<i class="fa-solid fa-star"></i>');
    } else {
      $(this).html('<i class="fa-regular fa-star"></i>');
    }
  });

  // Feed tabs
  $('.feed-tab').on('click', function () {
    $('.feed-tab').removeClass('active');
    $(this).addClass('active');
  });

  // Mark all as read
  $('.feed-mark-read').on('click', function () {
    $('.badge-unread').fadeOut(300, function () { $(this).remove(); });
    $('.feed-badge').text('0');
    $('.feed-tab:contains("Unread")').text('Unread (0)');
  });

  // Event nav buttons
  $('.event-nav-btn').on('click', function () {
    $('.event-nav-btn').removeClass('active');
    $(this).addClass('active');
  });

  // Filter dropdown visual toggle
  $('.btn-filter').on('click', function () {
    $(this).toggleClass('active');
  });

  // Create button animation
  $('.btn-create').on('click', function () {
    $(this).animate({ opacity: 0.7 }, 100).animate({ opacity: 1 }, 100);
  });

  // Year selector click feedback
  $('.year-selector').on('click', function () {
    $(this).css('border-color', '#1d4ed8');
    setTimeout(() => $(this).css('border-color', '#2563eb'), 300);
  });

  // Feed item hover highlight
  $('.feed-item').on('mouseenter', function () {
    $(this).css('cursor', 'pointer');
  });
});