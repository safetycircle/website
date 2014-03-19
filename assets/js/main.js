jQuery(document).ready(function($) {

    $('#adminTabs a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })

});