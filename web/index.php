<!DOCTYPE html>
<html>
    <head>
        <title>S-Cube</title>

        <link rel="stylesheet" type="text/css" href="./resources/Semantic-UI-CSS-master/semantic.css">
    </head>
    <style>
        .secondary {
            opacity: 0.8 !important;
        }

        .center_text {
            text-align: center !important;
        }
    </style>
<nav>
    <div class="ui five item menu">
        <a class="item active" onclick='move("home")'>Home</a>
        <a class="item" onclick='move("blog")'>Blog</a>
        <a class="item" onclick='move("dba")'>DBA</a>
        <a class="item" onclick='move("admin")'>Administration</a>
    </div>
</nav>
<body>

    <!-- 
    ------------------------------------------------------------------------------------------
    ---------- Modals ------------------------------------------------------------------------
    ------------------------------------------------------------------------------------------
    -->
    <div class="ui modal" id="editModal">
        <div class="header"></div>
        <div class="scrolling content">
        </div>
        <div class="actions">
            <div class="ui red cancel button">Delete Record</div>
            <div class="ui green approve button">Update Record</div>

        </div>
    </div>

        <div class="ui modal" id="addModal">
        <div class="header"></div>
        <div class="scrolling content">
        </div>
        <div class="actions">
            <div class="ui green approve button">Add Record</div>
        </div>
    </div>



    <!-- 
    ------------------------------------------------------------------------------------------
    ---------- Tiles ------------------------------------------------------------------------
    ------------------------------------------------------------------------------------------
    -->
    <div tile='home' tileview='yes'>
        <br><br><br><br><br>
        <div class='ui three column centered grid'>
            <div class='column'></div>
            <div class='center_text column'>
                <div class="ui header secondary">Serious Sports Statistics</div>
                <div class="ui huge header">S-Cube</div>            
            </div>
            <div class='column'></div>
        </div>
        <br><br><br><br><br>
        <div class="ui horizontal divider">
            Stats For Days
        </div>
        <br>
        <div class="ui four statistics">
        <div class="statistic">
            <div class="value">
            22
            </div>
            <div class="label">
            Saves
            </div>
        </div>
        <div class="statistic">
            <div class="text value">
            Three<br>
            Thousand
            </div>
            <div class="label">
            Signups
            </div>
        </div>
        <div class="statistic">
            <div class="value">
            <i class="plane icon"></i> 5
            </div>
            <div class="label">
            Flights
            </div>
        </div>
        <div class="statistic">
            <div class="value">
            42
            </div>
            <div class="label">
            Team Members
            </div>
        </div>
        </div>

    </div>



    <div tile='blog' tileview='no'>
        <div class='ui huge header'>Blog</div><p>Please allow 5-15 seconds for loading.</p>
        <div class='ui divider'></div>
        <div id='blogContent'></div>
    </div>


    <div tile='dba' tileview='no'>
        <br>
        <div class='ui raised segment'>
        <div class='ui huge header'>Statuses</div>
        <div class='ui button' onclick='getStatuses();'>Reload Statuses</div><p>Please allow 5-15 seconds for loading.</p>
        <div class='ui divider'></div>
            <div class='ui huge header'>MySQL Status</div>
            <div class='ui raised segment' id='mysql'>
            <div class="ui icon message">
                    <i class="notched circle loading icon"></i>
                    <div class="content">
                        <div class="header">
                        sudo service mysql status | grep "active (running)"
                        </div>
                        <p>Checking MySQL's status...</p>
                    </div>
                </div>     
            </div>
            <div class='ui huge header'> MongoDB Status</div>
            <div class='ui raised segment' id='mongoDB'>
            <div class="ui icon message">
                    <i class="notched circle loading icon"></i>
                    <div class="content">
                        <div class="header">
                        sudo service mongod status | grep "active (running)"
                        </div>
                        <p>Checking MongoDB's status...</p>
                    </div>
                </div>     
            </div>
            <div class='ui huge header'> ElasticSearch Status</div>
            <div class='ui raised segment' id='es'>
            <div class="ui icon message">
                    <i class="notched circle loading icon"></i>
                    <div class="content">
                        <div class="header">
                        sudo service elasticsearch status | grep "active (running)"
                        </div>
                        <p>Checking ElasticSearch's status...</p>
                    </div>
                </div>     
            </div>
        </div>
        <br>
        <div class='ui raised segment'>
            <div class='ui huge header'>Statistics</div>
            <div class='ui button' onclick='getStats();'>Reload Statistics</div><p>Please allow 5-15 seconds for loading.</p>
        <div class='ui divider'></div>
            <div class='ui huge header'>MySQL Stats</div>
            <div class='ui raised segment' id='mysql_stat'>
            <div class="ui message">
                    <div class="content">
                        <div class="header">
                        Ready to fetch MySQL statistics.
                        </div>
                    </div>
                </div>     
            </div>
            <div class='ui huge header'>MongoDB Backup</div>
            <div class='ui raised segment' id='mongoDB_stat'>
            <div class="ui message">
                    <div class="content">
                        <div class="header">
                        Ready to fetch MongoDB statistics.
                        </div>
                    </div>
                </div>     
            </div>
            <div class='ui huge header'>ElasticSearch Backup</div>
            <div class='ui raised segment' id='es_stat'>
            <div class="ui message">
                    <div class="content">
                        <div class="header">
                        Ready to fetch ElasticSearch statistics.
                        </div>
                    </div>
                </div>     
            </div>
        </div>
        <br>
        <div class='ui raised segment'>
            <div class='ui huge header'>Back Ups</div>
            <div class='ui button' onclick='backups();'>Backup</div><p>Please allow 5-15 seconds for loading.</p>
        <div class='ui divider'></div>
            <div class='ui huge header'>MySQL Backup</div>
            <div class='ui raised segment' id='mysql_back'>
            <div class="ui message">
                    <div class="content">
                        <div class="header">
                        Ready to perform MySQL backup.
                        </div>
                    </div>
                </div>     
            </div>
            <div class='ui huge header'>MongoDB Backup</div>
            <div class='ui raised segment' id='mongoDB_back'>
            <div class="ui message">
                    <div class="content">
                        <div class="header">
                        Ready to perform MongoDB backup.
                        </div>
                    </div>
                </div>     
            </div>
            <div class='ui huge header'>ElasticSearch Backup</div>
            <div class='ui raised segment' id='es_back'>
            <div class="ui message">
                    <div class="content">
                        <div class="header">
                        Ready to perform ElasticSearch backup.
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </div>


    <div tile='admin' tileview='no'>
        <br>
        <div class='ui one column center aligned grid'>
            <div class='column'>
                <h2 class="ui centered icon header" >
                    <i class="settings icon"></i>
                    <div class="content">
                        Administration
                        <div class="sub header">Database Management</div>
                    </div>
                </h2>
            </div>
        </div>

        <div class="ui top attached tabular menu">
            <a class="item" data-tab="customers">Customers</a>
            <a class="item" data-tab="employees">Employees</a>
            <a class="item" data-tab="feed">Feedback Reports</a>
            <a class="item" data-tab="sheet">S3_Sheets</a>
            <a class="item" data-tab="bball">Basketball_Player</a>
            <a class="item" data-tab="fball">Football_Player</a>
        </div>

        <div class="ui bottom attached tab segment" data-tab="customers">
        </div>
        <div class="ui bottom attached tab segment" data-tab="employees">
        </div>
        <div class="ui bottom attached tab segment" data-tab="feed">
        </div>
        <div class="ui bottom attached tab segment" data-tab="sheet">
        </div>
        <div class="ui bottom attached tab segment" data-tab="bball">
        </div>
        <div class="ui bottom attached tab segment" data-tab="fball">
        </div>
    </div>

</body>
    <script src="./resources/js/jquery-3.3.1.min.js"></script>
    <script src="./resources/Semantic-UI-CSS-master/semantic.min.js"></script>
    <script src="./resources/js/tile.js"></script>
    <script src="./resources/js/admin.js"></script>
</html>