jQuery(document).ready(function($) {

    $('#adminTabs a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    if ($('#video-modal').length > 0) {

        var videoModal = $('#video-modal'),
            videoSource = $('#video-container iframe');

        $('a.video-modal-trigger').on('click', function(e) {

            // Load in video source dynamically 
            var src = $(this).attr('data-src');

            videoSource.attr({
                'src': src
            });

            // Trigger modal window
            videoModal.modal();

            e.preventDefault();
        });

        $('a.close-video-modal').on('click', function(e) {
            var videoContainer = $('#video-container');

            // Hide modal window
            videoModal.modal('hide');

            // Remove video from Modal
            videoSource.attr({
                'src': ''
            });

            e.preventDefault();
        });
    }

});