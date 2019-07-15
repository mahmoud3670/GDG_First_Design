function headWriter() {
    var header = `
                    <meta charset="UTF-8">
                    <title>BakeEnd</title>
                    <!-- Tell the browser to be responsive to screen width -->
                    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
                    <!-- Bootstrap 3.3.4 -->
                    <link rel="stylesheet" href="../../plugins/bootstrap/css/bootstrap.min.css">
                    <!-- Font Awesome -->
                    <link rel="stylesheet" href="../../plugins/fontawesome-free-5.3.1-web/css/all.min.css">
                    <!-- Ionicons -->
                    <link rel="stylesheet" href="../../plugins/ionicons-2.0.1/css/ionicons.min.css">
                    <!-- Theme style -->
                    <link rel="stylesheet" href="../../plugins/dist/css/AdminLTE.css">
                    <!-- DataTables -->
                    <link rel="stylesheet" href="../../plugins/datatables/dataTables.bootstrap.css">
                    <link rel="stylesheet" href="../../plugins/dist/css/skins/skin-blue.min.css">
                    <link rel="stylesheet" href="../../plugins/dist/fonts/fonts-fa.css">
                    <link rel="stylesheet" href="../../plugins/dist/css/bootstrap-rtl.min.css">
                    <link rel="stylesheet" href="../../plugins/dist/css/rtl.css">
                    <!--[if lt IE 9]>
                    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
                <![endif]-->
                <!-- Select2 -->
                  <link rel="stylesheet" href="../../plugins/select2/select2.min.css">
        `;
    return header;
}



function headUl() {
    var head = `
                    <header class="main-header">
                    <!-- Logo -->
                    <a href="#" class="logo">
                        <!-- mini logo for sidebar mini 50x50 pixels -->
                        <span class="logo-mini"><b>M</b>A</span>
                        <!-- logo for regular state and mobile devices -->
                        <span class="logo-lg"><b>Admin</b>MAHMOUD</span>
                    </a>
                    <!--+++++++++++++++++++++++++++++++++Start Navbar++++++++++++++++++++++++++++-->
                    <!-- Header Navbar: style can be found in header.less -->
                    <nav class="navbar  navbar-static-top " role="navigation">
                        <!-- Sidebar toggle button-->
                        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                            <span class="sr-only">Toggle navigation</span>
                        </a>
                        <div class="navbar-custom-menu">
                            <ul class="nav navbar-nav">
                                <!------------- Messages: style can be found in dropdown.less الرسايل---------->
                                <li class="dropdown messages-menu">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="fas fa-envelope-open-text"></i>
                                        <span class="label label-success">300</span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="header">لديك عدد 4 رسائل</li>
                                        <li>
                                            <!-- inner menu: contains the actual data -->
                                            <ul class="menu">
                                                <li>
                                                    <!-- start message -->
                                                    <a href="#">
                                                        <div class="pull-right">
                                                            <img src="../../plugins/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                                                        </div>
                                                        <h4>
                                                             شكوي
                                                            <small><i class="fas fa-clock"></i> 5 دقائق</small>
                                                        </h4>
                                                        <p>بالرجاء تاكيد الحجز</p>
                                                    </a>
                                                </li>
                                                <!-- end message -->
                                            </ul>
                                        </li>
                                        <li class="footer"><a href="../Feedbake/Feedbake.html">مشاهده كل الرسائل</a></li>
                                    </ul>
                                </li>

                                <!-------------End Messages: style can be found in dropdown.less الرسايل---------->
                                <!----------- Start  User Account: style can be found in dropdown.less----- -->
                                <li class="dropdown user user-menu">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <img src="../../plugins/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                                        <span class="hidden-xs"> Mahmoud3670  </span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <!-- User image -->
                                        <li class="user-header">
                                            <img src="../../plugins/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                                            <p>
                                                اسم الموظف
                                                <small>الاداره التابع لها </small>
                                            </p>
                                        </li>
                                        <li class="user-footer">
                                            <div class="pull-left">
                                                <a href="../Login.html" class="btn btn-default btn-flat">تسجيل الخروج</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="pull-right image">
                        <img src="../../plugins/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p> Mahmoud3670</p>
                        <a href="#"><i class="fas fa-circle text-success"></i> متوفر</a>
                    </div>
                </div>
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li>
                        <a href="../News/Home.html">
                            <i class="far fa-newspaper"></i> <span> &nbsp &nbsp الاخبار </span> <i class="fa fa-angle-left pull-left"></i>
                        </a>
                    </li>

                    <li class="treeview">
                        <a href="#">
                            <i class="fas fa-swimmer fa-1x"></i> <span> الانشطه  </span> <i class="fa fa-angle-left pull-left"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="../Member/member.html"><i class="fas fa-address-card fa-1x"></i> &nbsp &nbsp الاعضاء  </a></li>
                            <!--+++++++++++++++++++++++ Super Admin Ony +++++++++++++++++++++++++++-->
                            <li><a href="../Act/activity.html"><i class="fas fa-universal-access fa-1x"></i> &nbsp &nbsp  الانشطه  </a></li>
                            <li><a href="../School/school.html"><i class="fas fa-vihara fa-1x"></i> &nbsp &nbsp المدارس </a></li>
                            <!--+++++++++++++++++++++++ Super Admin Ony +++++++++++++++++++++++++++-->
                            <li><a href="../SMember/smember.html"><i class="fas fa-child fa-1x"></i> &nbsp &nbsp اعضاء المدارس </a></li>
                            <li><a href="../Tour/Tournament.html"><i class="fas fa-medal fa-1x"></i> &nbsp &nbsp البطولات </a></li>
                        </ul>
                    </li>
                    <!--+++++++++++++++++++++++ Super Admin Ony +++++++++++++++++++++++++++-->
                    <li class="treeview">
                        <a href="#">
                            <i class="fas fa-users "></i> <span> &nbsp &nbsp  شؤن العاملين  </span> <i class="fa fa-angle-left pull-left"></i>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="../Department/Department.html"><i class="fab fa-codepen"></i> &nbsp &nbsp الاقسام   </a></li>
                            <li><a href="../Emp/employee.html"><i class="fas fa-user "></i> &nbsp &nbsp العاملين   </a></li>
                            <li><a href="../ESalary/esalary.html"><i class="fas fa-piggy-bank fa-1x"></i> &nbsp &nbsp مرتبات الموظفين </a></li>
                            <li><a href="../TSalary/tsalary.html"><i class="fas fa-search-dollar fa-1x"></i> &nbsp &nbsp مرتبات المدربين   </a></li>
                            <li><a href="../ActTrainer/acttrainer.html"><i class="fas fa-user-ninja fa-1x"></i> &nbsp &nbsp انشطه المدربين   </a></li>
                            <li><a href="../Admins/admin.html"><i class="fas fa-user-secret fa-1x"></i> &nbsp &nbsp الادمن   </a></li>

                        </ul>
                    </li>
                    <!--+++++++++++++++++++++++ Super Admin Ony +++++++++++++++++++++++++++-->
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>
            `;
    return head;
}

function footerWriter() {
    var footer = `
                    <footer class="main-footer">
                    <!-- To the right -->
                    <div class="pull-right hidden-xs">
                        <i class='ion-social-tux'> Mahmoud Abd-Elhamed Devolpment</i>>
                    </div>
                    <!-- Default to the left -->
                    <strong>Copyright &copy; 2018 <a href="#">نادي التنميه الشبابيه بشبرا الخيمه </a>.</strong> جميع الحقوق .
                </footer>
                </div>
                <!-- ./wrapper -->
                <!-- REQUIRED JS SCRIPTS -->
                <!-- jQuery 2.1.4 -->
                <script src="../../plugins/jQuery/jQuery-2.1.4.min.js"></script>
                <!-- Bootstrap 3.3.4 -->
                <script src="../../plugins/bootstrap/js/bootstrap.min.js"></script>
                <!-- AdminLTE App -->
                <script src="../../plugins/dist/js/app.min.js"></script>
                <!-- DataTables -->
                <script src="../../plugins/datatables/jquery.dataTables.min.js"></script>
                <script src="../../plugins/datatables/dataTables.bootstrap.min.js"></script>
                
                <script src="../../plugins/select2/select2.full.min.js"></script>
                <!-- page script -->
                <script>
                $(function() {
                    $('#example1').DataTable();
                    $('#example2').DataTable({
                        "paging": true,
                        "lengthChange": false,
                        "searching": false,
                        "ordering": true,
                        "info": true,
                        "autoWidth": false
                    });
                });

                $(function() {
                    //Initialize Select2 Elements
                    $(".select2").select2();
                });
                </script>
         `;
    return footer;

}