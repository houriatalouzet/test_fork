odoo.define('calendar_user.CalendarRenderer', function (require){
"use strict";
// require original module JS
var CalendarRenderer = require('web.CalendarRenderer');

// Extend widget
CalendarRederer.eventRender.include({
            eventRender: function (event, element) {
                var $render = $(self._eventRender(event));
                event.title = $render.find('.o_field_type_char:first').text();
                element.find('.fc-content').html($render.html());
                element.addClass($render.attr('class'));
                var display_hour = '';
                if (!event.allDay) {
                    var start = event.r_start || event.start;
                    var end = event.r_end || event.end;
                    var timeFormat = _t.database.parameters.time_format.search("%H") != -1 ? 'HH:mm': 'h:mma';
                    display_hour = '';
                    if (display_hour === '00:00 - 00:00') {
                        display_hour = _t('All day');
                    }
                }
                element.find('.fc-content .fc-time').text(display_hour);
            },
});

}