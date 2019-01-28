'use strict';

(function($){

  $(function() {

    $.mockjax({
      url: '/orgchart/initdata',
      responseTime: 1000,
      contentType: 'application/json',
      responseText: {
        'name': '行政部',
        'title': '执行/预算：277/300',
        'children': [
          
          { 'name': '车辆管理部', 'title': '执行/预算：76/80',
            'children': [
              { 'name': '人员工资', 'title': '30/30' },
              { 'name': '车辆费用', 'title': '46/50',
                'children': [
                  { 'name': '车辆维修', 'title': '36/40' },
                  { 'name': '车辆保养', 'title': '8/10' }
                ]
              }
            ]
          },{ 'name': '食堂', 'title': '执行/预算：167/180',
            'children': [
              { 'name': '食材采购', 'title': '156/160' },
              { 'name': '桌椅维修', 'title': '11/20'}
            ]
          },
          { 'name': '物业', 'title': '执行/预算：34/40' }
					
        ]
      }
    });

    $('#chart-container').orgchart({
      'data' : '/orgchart/initdata',
      'depth': 2,
      'nodeContent': 'title'
    });

  });

})(jQuery);