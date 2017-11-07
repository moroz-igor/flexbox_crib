    'use strict';
    function addattr(propertyOf, valueOf, cssId, btnId) {
    $(function() {
        var status = $('.flex-container').css(propertyOf);
    var codeBlock = document.getElementById(cssId);
        codeBlock.innerHTML = propertyOf + " : <span>" + valueOf + ";</span>";
        $('.flex-container').css(propertyOf, valueOf);  
        $('#' + cssId).css('display', 'block');  
        $(btnId).css('background-color','#3EFF3E') ;
            if(status === valueOf){
                $('.flex-container').css(propertyOf, "");
                $('#' + cssId).css('display', 'none');  
                $(btnId).css('background-color','') ;
                }
    });
    };
    function addattr_el(propertyOf, valueOf, cssId, btnId) {
    $(function() {
        var status = $('.flex-element').css(propertyOf);
    var codeBlock = document.getElementById(cssId);
        codeBlock.innerHTML = propertyOf + " : <span>" + valueOf + ";</span>";
        $('.flex-element').css(propertyOf, valueOf);  
        $('#' + cssId).css('display', 'block');  
        $(btnId).css('background-color','#3EFF3E') ;
            if(status === valueOf){
                $('.flex-element').css(propertyOf, "");
                $('#' + cssId).css('display', 'none');  
                $(btnId).css('background-color','') ;
            }
    });
    };
    function addattr_single(propertyOf, valueOf, cssId, btnId) {
    $(function() {
        var status = $('#element_3').css(propertyOf);
    var codeBlock = document.getElementById(cssId);
        codeBlock.innerHTML = propertyOf + " : <span>" + valueOf + ";</span>";
        $('#element_3').css(propertyOf, valueOf);  
        $('#' + cssId).css('display', 'block');  
        $(btnId).css('background-color','#3EFF3E') ;
            if(status === valueOf){
                $('#element_3').css(propertyOf, "");
                $('#' + cssId).css('display', 'none');  
                $(btnId).css('background-color','') ;
            }
    });
    };