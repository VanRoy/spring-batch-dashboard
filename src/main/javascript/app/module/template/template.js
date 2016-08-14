angular.module('template.app', ['app/module/job/view/detail.tpl.html', 'app/module/job/view/list.tpl.html', 'app/view/footer.tpl.html', 'app/view/header.tpl.html', 'app/view/home.tpl.html', 'app/view/nav.tpl.html']);

angular.module('app/module/job/view/detail.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/job/view/detail.tpl.html',
        '<div class=container-fluid><h2><strong>{{job.taskName}}</strong></h2><form class="form-horizontal form-readonly"><div class=form-group><label class="col-sm-1 control-label" for=status>Status :</label><div class=col-sm-11><input id=status class=form-control disabled ng-model=job.jobExecution.status></div></div><div class=form-group><label class="col-sm-1 control-label" for=status>Start :</label><div class=col-sm-11><input id=status class=form-control disabled ng-model=job.jobExecution.startTime></div></div><div class=form-group><label class="col-sm-1 control-label" for=status>End :</label><div class=col-sm-11><input id=status class=form-control disabled ng-model=job.jobExecution.endTime></div></div><div class=form-group><label class="col-sm-1 control-label" for=status>Duration :</label><div class=col-sm-11><input id=status class=form-control disabled ng-value="job.jobExecution.endTime - job.jobExecution.startTime"></div></div><div class=form-group><label class="col-sm-1 control-label" for=status>Exit Message :</label><div class=col-sm-11><input id=status class=form-control disabled ng-model=job.jobExecution.exitStatus.exitDescription></div></div></form><h2>Parameters</h2><table class="table table-striped table-bordered"><thead><tr><th>Parameter Name</th><th>Parameter Value</th></tr></thead><tbody><tr ng-repeat="(key, value) in job.jobExecution.jobParameters.parameters"><td>{{key}}</td><td>{{value}}</td></tr></tbody></table><h2>Steps</h2><div class="list-group list-view-pf"><div class=list-group-item><div class=list-view-pf-actions><button class="btn btn-default">Action</button><div class="dropdown pull-right dropdown-kebab-pf"><button class="btn btn-link dropdown-toggle" type=button id=dropdownKebabRight data-toggle=dropdown aria-haspopup=true aria-expanded=true><span class="fa fa-ellipsis-v"></span></button><ul class="dropdown-menu dropdown-menu-right" aria-labelledby=dropdownKebabRight><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li role=separator class=divider></li><li><a href=#>Separated link</a></li></ul></div></div><div class=list-view-pf-main-info><div class=list-view-pf-left><span class="fa fa-plane list-view-pf-icon-sm"></span></div><div class=list-view-pf-body><div class=list-view-pf-description><div class=list-group-item-heading>Event One</div><div class=list-group-item-text>The following snippet of text is <a href=#>rendered as link text</a>.</div></div><div class=list-view-pf-additional-info><div class=list-view-pf-additional-info-item><span class="pficon pficon-screen"></span> <strong>8</strong> Hosts</div><div class=list-view-pf-additional-info-item><span class="pficon pficon-cluster"></span> <strong>8</strong> Clusters</div><div class=list-view-pf-additional-info-item><span class="pficon pficon-container-node"></span> <strong>18</strong> Nodes</div><div class=list-view-pf-additional-info-item><span class="pficon pficon-image"></span> <strong>4</strong> Images</div></div></div></div></div></div></div>');
}]);

angular.module('app/module/job/view/list.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/job/view/list.tpl.html',
        '<div pf-toolbar id=jobListToolbar config=toolbarConfig></div><div class="list-group list-view-pf list-view-pf-equalized-column" pf-list-view items=items config=viewConfig action-buttons=actionButtons><div class=list-view-pf-left><span class="pficon pficon-ok list-view-pf-icon-md list-view-pf-icon-success"></span></div><div class=list-view-pf-body><div class=list-view-pf-description><div class=list-group-item-heading>{{item.taskName}}</div><div class=list-group-item-text>{{item.jobExecution.startTime | date:\'shortDate\'}} {{item.jobExecution.startTime | date:\'mediumTime\'}} - {{item.jobExecution.endTime | date:\'shortDate\'}} {{item.jobExecution.endTime | date:\'mediumTime\'}}</div></div><div class=list-view-pf-additional-info><div class=list-view-pf-additional-info-item><span class="pficon pficon-screen"></span> <strong>{{item.jobExecution.stepExecutions.length}}</strong> Step</div><div class=list-view-pf-additional-info-item><span class="pficon pficon-cluster"></span> <strong>28</strong> Clusters</div></div></div></div><script>/*\n' +
        '    // Equalize column width\n' +
        '    $(document).ready(function () {\n' +
        '        var widest = 0;\n' +
        '        $(\'.list-view-pf-equalized-column .list-view-pf-additional-info-item\').each( function() {\n' +
        '            widest = $(this).width() > widest ? $(this).width() : widest;\n' +
        '        }).width(widest);\n' +
        '    });\n' +
        '*/</script>');
}]);

angular.module('app/view/footer.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/footer.tpl.html',
        '');
}]);

angular.module('app/view/header.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/header.tpl.html',
        '<nav class="navbar navbar-pf-vertical"><div class=navbar-header><button type=button class=navbar-toggle><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand><img class=navbar-brand-icon src=/assets/img/logo-alt.svg alt=""><img class=navbar-brand-name src=/assets/img/brand-alt.svg alt="PatternFly Enterprise Application"></a></div><nav class="collapse navbar-collapse"><ul class="nav navbar-nav"><li><a href=# target=_blank class="nav-item-iconic nav-item-iconic-new-window"><span title=Launch class="fa fa-external-link"></span></a></li></ul><ul class="nav navbar-nav navbar-right navbar-iconic"><li class=dropdown><a class="dropdown-toggle nav-item-iconic" id=notifications data-toggle=dropdown aria-haspopup=true aria-expanded=true><span title=Notifications class="fa pficon-flag"></span> <span class=badge>2</span></a><div class="dropdown-menu infotip bottom-right"><div class=arrow></div><ul class=list-group><li class=list-group-item><span class="i pficon pficon-info"></span> Modified Datasources ExampleDS</li><li class=list-group-item><span class="i pficon pficon-info"></span> Error: System Failure</li></ul><div class=footer><a>Clear Messages</a></div></div></li><li class=dropdown><a class="dropdown-toggle nav-item-iconic" id=dropdownMenu1 data-toggle=dropdown aria-haspopup=true aria-expanded=true><span title=Help class="fa pficon-help"></span> <span class=caret></span></a><ul class=dropdown-menu aria-labelledby=dropdownMenu1><li><a href=#>Help</a></li><li><a href=#>About</a></li></ul></li><li class=dropdown><a class="dropdown-toggle nav-item-iconic" id=dropdownMenu2 data-toggle=dropdown aria-haspopup=true aria-expanded=true><span title=Username class="fa pficon-user"></span> <span class=caret></span></a><ul class=dropdown-menu aria-labelledby=dropdownMenu2><li><a href=#>Preferences</a></li><li><a href=#>Logout</a></li></ul></li></ul></nav></nav>');
}]);

angular.module('app/view/home.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/home.tpl.html',
        '<div class="cards-pf container-fluid container-cards-pf"><div class="row row-cards-pf"><div class="col-xs-12 col-sm-6 col-md-3"><div class="card-pf card-pf-accented card-pf-aggregate-status"><h2 class=card-pf-title><span class="fa fa-shield"></span><span class=card-pf-aggregate-status-count>0</span> Ipsum</h2><div class=card-pf-body><p class=card-pf-aggregate-status-notifications><span class=card-pf-aggregate-status-notification><a href=# class=add data-toggle=tooltip data-placement=top title="Add Ipsum"><span class="pficon pficon-add-circle-o"></span></a></span></p></div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="card-pf card-pf-accented card-pf-aggregate-status"><h2 class=card-pf-title><a href=#><span class="fa fa-shield"></span><span class=card-pf-aggregate-status-count>20</span> Amet</a></h2><div class=card-pf-body><p class=card-pf-aggregate-status-notifications><span class=card-pf-aggregate-status-notification><a href=#><span class="pficon pficon-error-circle-o"></span>4</a></span> <span class=card-pf-aggregate-status-notification><a href=#><span class="pficon pficon-warning-triangle-o"></span>1</a></span></p></div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="card-pf card-pf-accented card-pf-aggregate-status"><h2 class=card-pf-title><a href=#><span class="fa fa-shield"></span><span class=card-pf-aggregate-status-count>9</span> Adipiscing</a></h2><div class=card-pf-body><p class=card-pf-aggregate-status-notifications><span class=card-pf-aggregate-status-notification><span class="pficon pficon-ok"></span></span></p></div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="card-pf card-pf-accented card-pf-aggregate-status"><h2 class=card-pf-title><a href=#><span class="fa fa-shield"></span><span class=card-pf-aggregate-status-count>12</span> Lorem</a></h2><div class=card-pf-body><p class=card-pf-aggregate-status-notifications><a href=#><span class=card-pf-aggregate-status-notification><span class="pficon pficon-error-circle-o"></span>1</span></a></p></div></div></div></div><div class="row row-cards-pf"><div class="col-xs-12 col-sm-6 col-md-3"><div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini"><h2 class=card-pf-title><span class="fa fa-rebel"></span> <span class=card-pf-aggregate-status-count>0</span> Ipsum</h2><div class=card-pf-body><p class=card-pf-aggregate-status-notifications><span class=card-pf-aggregate-status-notification><a href=# class=add data-toggle=tooltip data-placement=top title="Add Ipsum"><span class="pficon pficon-add-circle-o"></span></a></span></p></div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini"><h2 class=card-pf-title><a href=#><span class="fa fa-paper-plane"></span> <span class=card-pf-aggregate-status-count>20</span> Amet</a></h2><div class=card-pf-body><p class=card-pf-aggregate-status-notifications><span class=card-pf-aggregate-status-notification><a href=#><span class="pficon pficon-error-circle-o"></span>4</a></span></p></div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini"><h2 class=card-pf-title><a href=#><span class="pficon pficon-cluster"></span> <span class=card-pf-aggregate-status-count>9</span> Adipiscing</a></h2><div class=card-pf-body><p class=card-pf-aggregate-status-notifications><span class=card-pf-aggregate-status-notification><span class="pficon pficon-ok"></span></span></p></div></div></div><div class="col-xs-12 col-sm-6 col-md-3"><div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini"><h2 class=card-pf-title><a href=#><span class="pficon pficon-image"></span> <span class=card-pf-aggregate-status-count>12</span> Lorem</a></h2><div class=card-pf-body><p class=card-pf-aggregate-status-notifications><a href=#><span class=card-pf-aggregate-status-notification><span class="pficon pficon-error-circle-o"></span>1</span></a></p></div></div></div></div><div class="row row-cards-pf"><div class="col-xs-12 col-sm-6"><div class=card-pf><div class=card-pf-heading><h2 class=card-pf-title>Top Utilized Clusters</h2></div><div class=card-pf-body><div class=progress-description>RHOS6-Controller</div><div class="progress progress-label-top-right"><div class="progress-bar progress-bar-danger" role=progressbar aria-valuenow=95 aria-valuemin=0 aria-valuemax=100 style="width: 95%" data-toggle=tooltip title="95% Used"><span><strong>190.0 of 200.0 GB</strong> Used</span></div><div class="progress-bar progress-bar-remaining" role=progressbar aria-valuenow=5 aria-valuemin=0 aria-valuemax=100 style="width: 5%" data-toggle=tooltip title="5% Available"><span class=sr-only>5% Available</span></div></div><div class=progress-description>CFMEQE-Cluster</div><div class="progress progress-label-top-right"><div class="progress-bar progress-bar-success" role=progressbar aria-valuenow=50 aria-valuemin=0 aria-valuemax=100 style="width: 50%" data-toggle=tooltip title="50% Used"><span><strong>100.0 of 200.0 GB</strong> Used</span></div><div class="progress-bar progress-bar-remaining" role=progressbar aria-valuenow=50 aria-valuemin=0 aria-valuemax=100 style="width: 50%" data-toggle=tooltip title="50% Available"><span class=sr-only>50% Available</span></div></div><div class=progress-description>RHOS-Undercloud</div><div class="progress progress-label-top-right"><div class="progress-bar progress-bar-warning" role=progressbar aria-valuenow=70 aria-valuemin=0 aria-valuemax=100 style="width: 70%" data-toggle=tooltip title="70% Used"><span><strong>140.0 of 200.0 GB</strong> Used</span></div><div class="progress-bar progress-bar-remaining" role=progressbar aria-valuenow=30 aria-valuemin=0 aria-valuemax=100 style="width: 30%" data-toggle=tooltip title="30% Available"><span class=sr-only>30% Available</span></div></div><div class=progress-description>RHEL6-Controller</div><div class="progress progress-label-top-right"><div class="progress-bar progress-bar-warning" role=progressbar aria-valuenow=76.5 aria-valuemin=0 aria-valuemax=100 style="width: 76.5%" data-toggle=tooltip title="76.5% Used"><span><strong>153.0 of 200.0 GB</strong> Used</span></div><div class="progress-bar progress-bar-remaining" role=progressbar aria-valuenow=23.5 aria-valuemin=0 aria-valuemax=100 style="width: 23.5%" data-toggle=tooltip title="23.5% Available"><span class=sr-only>23.5% Available</span></div></div></div></div></div><div class="col-xs-12 col-sm-6"><div class=card-pf><div class=card-pf-heading><h2 class=card-pf-title>Quotas</h2></div><div class=card-pf-body><div class="progress-container progress-description-left progress-label-right"><div class=progress-description>CPU</div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=25 aria-valuemin=0 aria-valuemax=100 style="width: 25%" data-toggle=tooltip title="25% Used"><span><strong>115 of 460</strong> MHz</span></div><div class="progress-bar progress-bar-remaining" role=progressbar aria-valuenow=75 aria-valuemin=0 aria-valuemax=100 style="width: 75%" data-toggle=tooltip title="75% Available"><span class=sr-only>75% Available</span></div></div></div><div class="progress-container progress-description-left progress-label-right"><div class=progress-description>Memory</div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=50 aria-valuemin=0 aria-valuemax=100 style="width: 50%" data-toggle=tooltip title="8 GB Used"><span><strong>8 of 16</strong> GB</span></div><div class="progress-bar progress-bar-remaining" role=progressbar aria-valuenow=50 aria-valuemin=0 aria-valuemax=100 style="width: 50%" data-toggle=tooltip title="8 GB Available"><span class=sr-only>50% Available</span></div></div></div><div class="progress-container progress-description-left progress-label-right"><div class=progress-description>Pods</div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=62.5 aria-valuemin=0 aria-valuemax=100 style="width: 62.5%" data-toggle=tooltip title="62.5% Used"><span><strong>5 of 8</strong> Total</span></div><div class="progress-bar progress-bar-remaining" role=progressbar aria-valuenow=37.5 aria-valuemin=0 aria-valuemax=100 style="width: 37.5%" data-toggle=tooltip title="37.5% Available"><span class=sr-only>37.5% Available</span></div></div></div><div class="progress-container progress-description-left progress-label-right"><div class=progress-description>Services</div><div class=progress><div class=progress-bar role=progressbar aria-valuenow=100 aria-valuemin=0 aria-valuemax=100 style="width: 100%" data-toggle=tooltip title="100% Used"><span><strong>2 of 2</strong> Total</span></div></div></div></div></div></div></div><div class="row row-cards-pf"><div class=col-md-12><div class="card-pf card-pf-utilization"><div class=card-pf-heading><p class=card-pf-heading-details>Last 30 days</p><h2 class=card-pf-title>Utilization</h2></div><div class=card-pf-body><div class=row><div class="col-xs-12 col-sm-4 col-md-4"><h3 class=card-pf-subtitle>CPU</h3><p class=card-pf-utilization-details><span class=card-pf-utilization-card-details-count>50</span> <span class=card-pf-utilization-card-details-description><span class=card-pf-utilization-card-details-line-1>Available</span> <span class=card-pf-utilization-card-details-line-2>of 1000 MHz</span></span></p><div id=chart-pf-donut-1></div><div class=chart-pf-sparkline id=chart-pf-sparkline-1></div><script>var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig(\'A\');\n' +
        '                                donutConfig.bindto = \'#chart-pf-donut-1\';\n' +
        '                                donutConfig.color =  {\n' +
        '                                    pattern: ["#cc0000","#D1D1D1"]\n' +
        '                                };\n' +
        '                                donutConfig.data = {\n' +
        '                                    type: "donut",\n' +
        '                                    columns: [\n' +
        '                                        ["Used", 95],\n' +
        '                                        ["Available", 5]\n' +
        '                                    ],\n' +
        '                                    groups: [\n' +
        '                                        ["used", "available"]\n' +
        '                                    ],\n' +
        '                                    order: null\n' +
        '                                };\n' +
        '                                donutConfig.tooltip = {\n' +
        '                                    contents: function (d) {\n' +
        '                                        return \'<span class="donut-tooltip-pf" style="white-space: nowrap;">\' +\n' +
        '                                                Math.round(d[0].ratio * 100) + \'%\' + \' MHz \' + d[0].name +\n' +
        '                                                \'</span>\';\n' +
        '                                    }\n' +
        '                                };\n' +
        '\n' +
        '                                var chart1 = c3.generate(donutConfig);\n' +
        '                                var donutChartTitle = d3.select("#chart-pf-donut-1").select(\'text.c3-chart-arcs-title\');\n' +
        '                                donutChartTitle.text("");\n' +
        '                                donutChartTitle.insert(\'tspan\').text("950").classed(\'donut-title-big-pf\', true).attr(\'dy\', 0).attr(\'x\', 0);\n' +
        '                                donutChartTitle.insert(\'tspan\').text("MHz Used").classed(\'donut-title-small-pf\', true).attr(\'dy\', 20).attr(\'x\', 0);\n' +
        '\n' +
        '                                var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();\n' +
        '                                sparklineConfig.bindto = \'#chart-pf-sparkline-1\';\n' +
        '                                sparklineConfig.data = {\n' +
        '                                    columns: [\n' +
        '                                        [\'%\', 10, 50, 28, 20, 31, 27, 60, 36, 52, 55, 62, 68, 69, 88, 74, 88, 95],\n' +
        '                                    ],\n' +
        '                                    type: \'area\'\n' +
        '                                };\n' +
        '                                var chart2 = c3.generate(sparklineConfig);</script></div><div class="col-xs-12 col-sm-4 col-md-4"><h3 class=card-pf-subtitle>Memory</h3><p class=card-pf-utilization-details><span class=card-pf-utilization-card-details-count>256</span> <span class=card-pf-utilization-card-details-description><span class=card-pf-utilization-card-details-line-1>Available</span> <span class=card-pf-utilization-card-details-line-2>of 432 GB</span></span></p><div id=chart-pf-donut-2></div><div class=chart-pf-sparkline id=chart-pf-sparkline-2></div><script>var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig(\'A\');\n' +
        '                                donutConfig.bindto = \'#chart-pf-donut-2\';\n' +
        '                                donutConfig.color =  {\n' +
        '                                    pattern: ["#3f9c35","#D1D1D1"]\n' +
        '                                };\n' +
        '                                donutConfig.data = {\n' +
        '                                    type: "donut",\n' +
        '                                    columns: [\n' +
        '                                        ["Used", 41],\n' +
        '                                        ["Available", 59]\n' +
        '                                    ],\n' +
        '                                    groups: [\n' +
        '                                        ["used", "available"]\n' +
        '                                    ],\n' +
        '                                    order: null\n' +
        '                                };\n' +
        '                                donutConfig.tooltip = {\n' +
        '                                    contents: function (d) {\n' +
        '                                        return \'<span class="donut-tooltip-pf" style="white-space: nowrap;">\' +\n' +
        '                                                Math.round(d[0].ratio * 100) + \'%\' + \' GB \' + d[0].name +\n' +
        '                                                \'</span>\';\n' +
        '                                    }\n' +
        '                                };\n' +
        '\n' +
        '                                var chart3 = c3.generate(donutConfig);\n' +
        '                                var donutChartTitle = d3.select("#chart-pf-donut-2").select(\'text.c3-chart-arcs-title\');\n' +
        '                                donutChartTitle.text("");\n' +
        '                                donutChartTitle.insert(\'tspan\').text("176").classed(\'donut-title-big-pf\', true).attr(\'dy\', 0).attr(\'x\', 0);\n' +
        '                                donutChartTitle.insert(\'tspan\').text("GB Used").classed(\'donut-title-small-pf\', true).attr(\'dy\', 20).attr(\'x\', 0);\n' +
        '\n' +
        '                                var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();\n' +
        '                                sparklineConfig.bindto = \'#chart-pf-sparkline-2\';\n' +
        '                                sparklineConfig.data = {\n' +
        '                                    columns: [\n' +
        '                                        [\'%\', 35, 36, 20, 30, 31, 22, 44, 36, 40, 41, 55, 52, 48, 48, 50, 40, 41],\n' +
        '                                    ],\n' +
        '                                    type: \'area\'\n' +
        '                                };\n' +
        '                                var chart4 = c3.generate(sparklineConfig);</script></div><div class="col-xs-12 col-sm-4 col-md-4"><h3 class=card-pf-subtitle>Network</h3><p class=card-pf-utilization-details><span class=card-pf-utilization-card-details-count>200</span> <span class=card-pf-utilization-card-details-description><span class=card-pf-utilization-card-details-line-1>Available</span> <span class=card-pf-utilization-card-details-line-2>of 1300 Gbps</span></span></p><div id=chart-pf-donut-3></div><div class=chart-pf-sparkline id=chart-pf-sparkline-3></div><script>var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig(\'A\');\n' +
        '                                donutConfig.bindto = \'#chart-pf-donut-3\';\n' +
        '                                donutConfig.color =  {\n' +
        '                                    pattern: ["#EC7A08","#D1D1D1"]\n' +
        '                                };\n' +
        '                                donutConfig.data = {\n' +
        '                                    type: "donut",\n' +
        '                                    columns: [\n' +
        '                                        ["Used", 85],\n' +
        '                                        ["Available", 15]\n' +
        '                                    ],\n' +
        '                                    groups: [\n' +
        '                                        ["used", "available"]\n' +
        '                                    ],\n' +
        '                                    order: null\n' +
        '                                };\n' +
        '                                donutConfig.tooltip = {\n' +
        '                                    contents: function (d) {\n' +
        '                                        return \'<span class="donut-tooltip-pf" style="white-space: nowrap;">\' +\n' +
        '                                                Math.round(d[0].ratio * 100) + \'%\' + \' Gbps \' + d[0].name +\n' +
        '                                                \'</span>\';\n' +
        '                                    }\n' +
        '                                };\n' +
        '\n' +
        '                                var chart5 = c3.generate(donutConfig);\n' +
        '                                var donutChartTitle = d3.select("#chart-pf-donut-3").select(\'text.c3-chart-arcs-title\');\n' +
        '                                donutChartTitle.text("");\n' +
        '                                donutChartTitle.insert(\'tspan\').text("1100").classed(\'donut-title-big-pf\', true).attr(\'dy\', 0).attr(\'x\', 0);\n' +
        '                                donutChartTitle.insert(\'tspan\').text("Gbps Used").classed(\'donut-title-small-pf\', true).attr(\'dy\', 20).attr(\'x\', 0);\n' +
        '\n' +
        '                                var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();\n' +
        '                                sparklineConfig.bindto = \'#chart-pf-sparkline-3\';\n' +
        '                                sparklineConfig.data = {\n' +
        '                                    columns: [\n' +
        '                                        [\'%\', 60, 55, 70, 44, 31, 67, 54, 46, 58, 75, 62, 68, 69, 88, 74, 88, 85],\n' +
        '                                    ],\n' +
        '                                    type: \'area\'\n' +
        '                                };\n' +
        '                                var chart6 = c3.generate(sparklineConfig);</script></div></div></div></div></div></div><div class="row row-cards-pf"><div class="col-xs-12 col-sm-4 col-md-4"><div class="card-pf card-pf-utilization"><h2 class=card-pf-title>Network</h2><div class=card-pf-body><p class=card-pf-utilization-details><span class=card-pf-utilization-card-details-count>200</span> <span class=card-pf-utilization-card-details-description><span class=card-pf-utilization-card-details-line-1>Available</span> <span class=card-pf-utilization-card-details-line-2>of 1300 Gbps</span></span></p><div id=chart-pf-donut-4></div><div class=chart-pf-sparkline id=chart-pf-sparkline-4></div><script>var c3ChartDefaults = $().c3ChartDefaults();\n' +
        '\n' +
        '                        var donutConfig = c3ChartDefaults.getDefaultDonutConfig(\'A\');\n' +
        '                        donutConfig.bindto = \'#chart-pf-donut-4\';\n' +
        '                        donutConfig.color =  {\n' +
        '                            pattern: ["#EC7A08","#D1D1D1"]\n' +
        '                        };\n' +
        '                        donutConfig.data = {\n' +
        '                            type: "donut",\n' +
        '                            columns: [\n' +
        '                                ["Used", 85],\n' +
        '                                ["Available", 15]\n' +
        '                            ],\n' +
        '                            groups: [\n' +
        '                                ["used", "available"]\n' +
        '                            ],\n' +
        '                            order: null\n' +
        '                        };\n' +
        '                        donutConfig.tooltip = {\n' +
        '                            contents: function (d) {\n' +
        '                                return \'<span class="donut-tooltip-pf" style="white-space: nowrap;">\' +\n' +
        '                                        Math.round(d[0].ratio * 100) + \'%\' + \' Gbps \' + d[0].name +\n' +
        '                                        \'</span>\';\n' +
        '                            }\n' +
        '                        };\n' +
        '\n' +
        '                        var chart1 = c3.generate(donutConfig);\n' +
        '                        var donutChartTitle = d3.select("#chart-pf-donut-4").select(\'text.c3-chart-arcs-title\');\n' +
        '                        donutChartTitle.text("");\n' +
        '                        donutChartTitle.insert(\'tspan\').text("1100").classed(\'donut-title-big-pf\', true).attr(\'dy\', 0).attr(\'x\', 0);\n' +
        '                        donutChartTitle.insert(\'tspan\').text("Gbps Used").classed(\'donut-title-small-pf\', true).attr(\'dy\', 20).attr(\'x\', 0);\n' +
        '\n' +
        '                        var sparklineConfig = c3ChartDefaults.getDefaultSparklineConfig();\n' +
        '                        sparklineConfig.bindto = \'#chart-pf-sparkline-4\';\n' +
        '                        sparklineConfig.data = {\n' +
        '                            columns: [\n' +
        '                                [\'%\', 60, 55, 70, 44, 31, 67, 54, 46, 58, 75, 62, 68, 69, 88, 74, 88, 85],\n' +
        '                            ],\n' +
        '                            type: \'area\'\n' +
        '                        };\n' +
        '\n' +
        '                        var chart2 = c3.generate(sparklineConfig);</script></div></div></div></div><div class="row row-cards-pf"><div class="col-xs-12 col-sm-6 col-md-5"><div class=card-pf><div class=card-pf-heading><div class="dropdown card-pf-time-frame-filter"><button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown>Last 30 Days <span class=caret></span></button><ul class="dropdown-menu dropdown-menu-right" role=menu><li><a href=#>Last 60 Days</a></li><li><a href=#>Last 90 Days</a></li></ul></div><h2 class=card-pf-title>Card Title</h2></div><div class=card-pf-body><p>[card contents]</p></div></div></div><div class="col-xs-12 col-sm-6 col-md-7"><div class=card-pf><h2 class=card-pf-title>Card Title</h2><div class=card-pf-body><p>[card contents]</p></div><div class=card-pf-footer><div class="dropdown card-pf-time-frame-filter"><button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown>Last 30 Days <span class=caret></span></button><ul class="dropdown-menu dropdown-menu-right" role=menu><li><a href=#>Last 60 Days</a></li><li><a href=#>Last 90 Days</a></li></ul></div><p><a href=# class=card-pf-link-with-icon><span class="pficon pficon-add-circle-o"></span>Add New Cluster</a></p></div></div></div></div><div class="row row-cards-pf"><div class="col-xs-12 col-sm-5 col-md-5"><div class=card-pf><h2 class=card-pf-title>Card Title</h2><div class=card-pf-body><p>[card contents]</p></div><div class=card-pf-footer><div class="dropdown card-pf-time-frame-filter"><button type=button class="btn btn-default dropdown-toggle" data-toggle=dropdown>Last 30 Days <span class=caret></span></button><ul class="dropdown-menu dropdown-menu-right" role=menu><li><a href=#>Last 60 Days</a></li><li><a href=#>Last 90 Days</a></li></ul></div><p><a href=# class=card-pf-link-with-icon><span class="pficon pficon-flag"></span>View CPU Events</a></p></div></div></div><div class="col-xs-12 col-sm-7 col-md-7"><div class=card-pf><h2 class=card-pf-title>Card Title</h2><div class=card-pf-body><p>[card contents]</p></div></div></div></div><div class="row row-cards-pf"><div class="col-xs-6 col-sm-8 col-md-8"><div class=card-pf><div class=card-pf-body><p>[card contents]</p></div><div class=card-pf-footer><p><a href=#>Footer link</a></p></div></div></div><div class="col-xs-6 col-sm-4 col-md-4"><div class=card-pf><div class=card-pf-body><p>[card contents]</p></div><div class=card-pf-footer><p><a href=#>Footer link</a></p></div></div></div></div><div class="row row-cards-pf"><div class="col-xs-6 col-sm-6 col-md-6"><div class=card-pf><div class=card-pf-body><p>[card contents]</p></div></div></div><div class="col-xs-6 col-sm-6 col-md-6"><div class=card-pf><div class=card-pf-body><p>[card contents]</p></div></div></div></div></div>');
}]);

angular.module('app/view/nav.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/nav.tpl.html',
        '<div ng-controller=NavigationCtrl class="nav-pf-vertical nav-pf-vertical-with-secondary-nav"><ul class=list-group><li class=list-group-item ng-class="{active: $state.includes(\'{{item.state}}\')}" ng-repeat="item in navItems"><a ui-sref={{item.sref}}><span ng-show=item.icon class={{item.icon}}></span> <span class=list-group-item-value>{{item.title}}</span></a></li></ul></div>');
}]);
