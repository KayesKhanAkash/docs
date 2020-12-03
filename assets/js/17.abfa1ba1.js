(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{461:function(e,t,a){e.exports=a.p+"assets/img/1.17acd297.png"},462:function(e,t,a){e.exports=a.p+"assets/img/2.c4d518ee.png"},761:function(e,t,a){"use strict";a.r(t);var s=a(9),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Airflow is defined for now as a clear winner for open source orchestration tools. So like everyone, reading medium on the web, we are thinking this tool is mature and will resolved all the constraint we have to schedule, orchestrate & monitor our dags.")]),e._v(" "),s("p",[e._v("Mostly this blog post will be technical focus but let you overview the major issue we have with Airflow trying to make it the main orchestrator for our data pipeline and will describe our long road to hell to lead us to create & open source "),s("RouterLink",{attrs:{to:"/"}},[e._v("Kestra")]),e._v(" based on the frustration using Airflow.")],1),e._v(" "),s("p",[e._v("Without any order, here is the major point that we have discovered, and we want to share with you :")]),e._v(" "),s("hr"),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#workflow-as-code-not-so-good-idea"}},[e._v("Workflow as code, not so good idea !")])]),s("li",[s("a",{attrs:{href:"#realtime-baby"}},[e._v("Realtime baby !")])]),s("li",[s("a",{attrs:{href:"#events-based-api-first"}},[e._v("Events based & API First")]),s("ul",[s("li",[s("a",{attrs:{href:"#api-not-so-first"}},[e._v("API not so first")])]),s("li",[s("a",{attrs:{href:"#what-events"}},[e._v("What Events ?")])])])]),s("li",[s("a",{attrs:{href:"#stable"}},[e._v("Stable ? ...")])]),s("li",[s("a",{attrs:{href:"#scalability-hum-hum"}},[e._v("Scalability, hum hum ...")]),s("ul",[s("li",[s("a",{attrs:{href:"#save-my-cpu"}},[e._v("Save my CPU")])]),s("li",[s("a",{attrs:{href:"#where-is-the-spof"}},[e._v("Where is the SPOF ?")])])])]),s("li",[s("a",{attrs:{href:"#dynamic-workflows"}},[e._v("Dynamic workflows !")]),s("ul",[s("li",[s("a",{attrs:{href:"#first-one-are-dynamic-tasks"}},[e._v("First one are dynamic tasks.")])]),s("li",[s("a",{attrs:{href:"#second-are-sensors"}},[e._v("Second are sensors.")])]),s("li",[s("a",{attrs:{href:"#task-outputs-vs-xcom"}},[e._v("Task outputs vs XCom")])]),s("li",[s("a",{attrs:{href:"#where-is-my-files"}},[e._v("Where is my files ?")])])])]),s("li",[s("a",{attrs:{href:"#entreprise-not-so-ready"}},[e._v("Entreprise not so ready !")]),s("ul",[s("li",[s("a",{attrs:{href:"#please-keep-my-revision"}},[e._v("Please keep my revision !")])]),s("li",[s("a",{attrs:{href:"#where-is-the-rbac"}},[e._v("Where is the RBAC ?")])])])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"workflow-as-code-not-so-good-idea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workflow-as-code-not-so-good-idea"}},[e._v("#")]),e._v(" Workflow as code, not so good idea !")]),e._v(" "),s("p",[e._v("Airflow dag are defined as python code ! First look seems to be a good idea but in the fact it can be a very dangerous pattern. Lets me explain a real use case.")]),e._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" airflow "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" DAG\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" airflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("operators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("bash_operator "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" BashOperator\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" datetime "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" timedelta\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" airflow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dates "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" days_ago\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" time\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("get_command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[e._v("f\"echo '")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'\"")])]),e._v("\n\ndefault_args "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'owner'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'airflow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'depends_on_past'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'start_date'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" days_ago"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" DAG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'sleep'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        default_args"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default_args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        schedule_interval"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("timedelta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("days"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" dag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    task_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" BashOperator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        task_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'first_task'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        bash_command"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("get_command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    task_2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" BashOperator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        task_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'second_task'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        bash_command"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("get_command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\ntask_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" task_2\n")])])]),s("p",[e._v("Simple and working and let's change the function "),s("code",[e._v("get_bash_print")]),e._v(" with a function that will do an heavy computing task (like fetching database, ...) . Still working, but in this case, the whole airflow instance is in danger. Airflow evaluate dag a "),s("strong",[e._v("lot of time in all services")]),e._v(" (webserver, worker, scheduler, ...)."),s("br"),e._v("\nImagine an Airflow as self-service for a large company, a simple dag could break "),s("strong",[e._v("the whole platform")]),e._v(".")]),e._v(" "),s("p",[e._v("How can you prevent this to happen ? You need to have a strong review of each dags to be sure that no heavy compute are done outside of an Operator. Still, it's possible, but it will be really hard on a large scale company cluster.")]),e._v(" "),s("p",[e._v("Now we are changing the function with a sleep (that would simulate any heavy work):")]),e._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("get_bash_print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[e._v('f"Hello from a ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"')])]),e._v("\n")])])]),s("p",[e._v("And run "),s("code",[e._v("airflow list_dags -r")]),e._v(", this command will expose the parsing time for all the dag, that will be done "),s("strong",[e._v("every x seconds")]),e._v(" on webserver and scheduler and before "),s("strong",[e._v("any task")]),e._v(" on workers:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("-------------------------------------------------------------------\nDagBag loading stats for /usr/local/airflow/dags\n-------------------------------------------------------------------\nNumber of DAGs: 2\nTotal task number: 4\nDagBag parsing time: 10.130541999999993\n-------------------------------------------------------------------------------------------------------+--------------------+---------+----------+------------------------------------------------------------------------------\nfile                                                                                                   | duration           | dag_num | task_num | dags                                                                         \n-------------------------------------------------------------------------------------------------------+--------------------+---------+----------+------------------------------------------------------------------------------\n/sleep.py                                                                                              | 10.018332000000001 |       1 |        2 | ['sleep']                                                                    \n/bash.py                                                                                               | 0.002396           |       1 |        2 | ['bash']\n-------------------------------------------------------------------------------------------------------+--------------------+---------+----------+------------------------------------------------------------------------------\n")])])]),s("p",[e._v("Simple experiment, let's create the same dag and remove the "),s("code",[e._v("time.sleep")]),e._v(" and trigger it from the ui dag. Look at this taskrun:"),s("br"),e._v(" "),s("img",{attrs:{src:a(461),alt:"Flow list"}}),s("br"),e._v("\nAs you can see, there is a huge gap between tasks! and it's only because the "),s("code",[e._v("sleep")]),e._v(" dag exists on the current cluster, even if the "),s("code",[e._v("bash")]),e._v(" dag is fast, it will be slow down by other dag.")]),e._v(" "),s("p",[e._v("You got it ? Yeah, you have successfully slow down your Airflow "),s("strong",[e._v("whole cluster")]),e._v(". Worst, imagine that this task will fetch any external service, you could "),s("strong",[e._v("overload & crash")]),e._v(" this service, since Airflow scan "),s("strong",[e._v("everytime all dags")]),e._v(" even if the dag is not running."),s("br"),e._v("\nYou can mitigate this using a strong dag review process, but it will not scale well on a shared large cluster used by a lots of independent teams")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Conclusion")]),e._v(" "),s("p",[e._v("It's why Kestra have chosen a declarative language for its workflow engine, since all flow are isolated and serialized preventing any code injection."),s("br"),e._v("\nYou can scale to thousands of flows, not matter how there are configured, there will be not impact on your cluster since flow are only evaluated at runtime.")])]),e._v(" "),s("h2",{attrs:{id:"realtime-baby"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#realtime-baby"}},[e._v("#")]),e._v(" Realtime baby !")]),e._v(" "),s("p",[e._v("Airflow is not build with realtime in mind, the ui is a static, server side generated app. When using airflow UI you "),s("strong",[e._v("will hit F5")]),e._v(" or refresh all the time."),s("br"),e._v("\nYou want to know if the dag is running, hit F5 is the only solution ! Same for logs !")]),e._v(" "),s("h2",{attrs:{id:"events-based-api-first"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events-based-api-first"}},[e._v("#")]),e._v(" Events based & API First")]),e._v(" "),s("p",[e._v("Airflow was born with a simple concept, schedule a dag at this time ! Every else is not in the mindset of Airflow.")]),e._v(" "),s("h3",{attrs:{id:"api-not-so-first"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-not-so-first"}},[e._v("#")]),e._v(" API not so first")]),e._v(" "),s("p",[e._v("There is an "),s("a",{attrs:{href:"https://airflow.apache.org/docs/stable/rest-api-ref.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("expirimental API"),s("OutboundLink")],1),e._v(" but clearly insufficient for a real world."),s("br"),e._v("\nFor example, the "),s("a",{attrs:{href:"https://airflow.apache.org/docs/stable/rest-api-ref.html#post--api-experimental-dags--DAG_ID--dag_runs",target:"_blank",rel:"noopener noreferrer"}},[e._v("trigger dag API"),s("OutboundLink")],1),e._v(" can be used passing some args, but the server don't know these! So it will let passed some mandatory arguments and create a DagRun that will failed.")]),e._v(" "),s("p",[e._v("In other hand, Kestra was built with a strong API, everything can be done with API, create a flow, execute it, ... That let you integrate Kestra in company the way you want to use it.")]),e._v(" "),s("h3",{attrs:{id:"what-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-events"}},[e._v("#")]),e._v(" What Events ?")]),e._v(" "),s("p",[e._v("Airflow have a mandatory dag options "),s("code",[e._v("start_date")]),e._v(" & "),s("code",[e._v("schedule_interval")]),e._v("! Meaning that all is thinking like a crontab with a start date."),s("br"),e._v("\nBut wait, in real life, we don't want to schedule a flow, we want to start when an external event occurs (like a new file on a storage for example).")]),e._v(" "),s("p",[e._v("Airflow is not the right tool for this use case! Kestra handle it with "),s("strong",[e._v("optional")]),e._v(" "),s("RouterLink",{attrs:{to:"/docs/concepts/flows.html#triggers"}},[e._v("trigger")]),e._v(" that allow you handle events (time or anything else) like a reason to start an execution and follow it.")],1),e._v(" "),s("h2",{attrs:{id:"stable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stable"}},[e._v("#")]),e._v(" Stable ? ...")]),e._v(" "),s("p",[e._v("Let me give some insight. So we start by testing a simple use case that will represent our real usage from our data pipeline: Doing lots of different dags that would simply call external API, you understand me ELT here.")]),e._v(" "),s("p",[e._v("In order to prove the stability of Airflow, we simply simulate some kind of real workflow, 200 dags with each 15/20 tasks with external api, simulate here with a "),s("code",[e._v("sleep 1")]),e._v(". We launch the test at the same time, what we expect to have on daily basis at least."),s("br"),e._v("\nWe use "),s("a",{attrs:{href:"https://airflow.apache.org/docs/stable/_modules/airflow/example_dags/example_bash_operator.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("example_bash_operator"),s("OutboundLink")],1),e._v(" and just change the range from 5 to 15 and activate all the task at the same time.")]),e._v(" "),s("p",[e._v("We will keep you about commenting the execution time of this test that take really longer than we expect, worst are :"),s("br"),e._v(" "),s("img",{attrs:{src:a(462),alt:"Airflow failed some tasks"}}),s("br"),e._v("\nYes this is "),s("strong",[e._v("failed task")]),e._v(" ! How can a scheduler can failed task with "),s("code",[e._v("sleep 1")]),e._v(" !")]),e._v(" "),s("p",[e._v("How can I monitor my daily flows if I need to have some failed tasks "),s("strong",[e._v("only due to the scheduler")]),e._v("!")]),e._v(" "),s("h2",{attrs:{id:"scalability-hum-hum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scalability-hum-hum"}},[e._v("#")]),e._v(" Scalability, hum hum ...")]),e._v(" "),s("p",[e._v("From airflow documentation :")]),e._v(" "),s("blockquote",[s("p",[e._v("Scalable: Airflow has a modular architecture and uses a message queue to orchestrate an arbitrary number of workers. Airflow is ready to scale to infinity.")])]),e._v(" "),s("h3",{attrs:{id:"save-my-cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#save-my-cpu"}},[e._v("#")]),e._v(" Save my CPU")]),e._v(" "),s("p",[e._v("At first, we have believed the marketing baseline, but the road was not so happy."),s("br"),e._v("\nWhen we start the "),s("a",{attrs:{href:"#stable--"}},[e._v("bench")]),e._v(" below, this one will use the whole 16 core of the servers I was using just doing sleep.")]),e._v(" "),s("p",[e._v("In fact, Airflow is a python software that handle scalability with "),s("a",{attrs:{href:"https://airflow.apache.org/docs/stable/executor/celery.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Celery executor"),s("OutboundLink")],1),e._v(". Celery will fork many airflow process, not sharing anything."),s("br"),e._v("\nWhen I start a dag, the scheduler will scan every x seconds all the dags, worker for every task will scan all the dags on the cluster, this will use a lots of CPU for large cluster instance, and this will be worst & worst as long as you add new dag / tasks."),s("br"),e._v("\nIt's "),s("a",{attrs:{href:"https://stackoverflow.com/a/49905571/1590168",target:"_blank",rel:"noopener noreferrer"}},[e._v("by design"),s("OutboundLink")],1),e._v(", Airflow must be used for long running tasks, not for lots of small / short tasks.")]),e._v(" "),s("h3",{attrs:{id:"where-is-the-spof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-is-the-spof"}},[e._v("#")]),e._v(" Where is the SPOF ?")]),e._v(" "),s("p",[e._v("Airflow will not scale to infinity since a lot's of components in their architecture are scalable by desing:")]),e._v(" "),s("ul",[s("li",[e._v("Database (MySQL or Postgres): are not horizontal scalable, only vertical (raise CPU & mem) since mono server.")]),e._v(" "),s("li",[e._v("Queue (Redis): Aiflow use a queue that is not scalable and mono servers also")]),e._v(" "),s("li",[e._v("Airflow Scheduler: handle all the task in the cluster can only have "),s("strong",[e._v("one")]),e._v(" instance on the cluster, if not there will be multiple task run for the same execution.")])]),e._v(" "),s("h2",{attrs:{id:"dynamic-workflows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-workflows"}},[e._v("#")]),e._v(" Dynamic workflows !")]),e._v(" "),s("p",[e._v("Still from Airflow documentation :")]),e._v(" "),s("blockquote",[s("p",[e._v("Dynamic: Airflow pipelines are configuration as code (Python), allowing for dynamic pipeline generation. This allows for writing code that instantiates pipelines dynamically.")]),e._v(" "),s("p",[e._v("Extensible: Easily define your own operators, executors and extend the library so that it fits the level of abstraction that suits your environment.")]),e._v(" "),s("p",[e._v("Elegant: Airflow pipelines are lean and explicit. Parameterizing your scripts is built into the core of Airflow using the powerful Jinja templating engine")])]),e._v(" "),s("p",[e._v("Task in dags are set up using "),s("a",{attrs:{href:"https://airflow.apache.org/docs/stable/tutorial.html#setting-up-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("dependencies"),s("OutboundLink")],1),e._v("."),s("br"),e._v("\nYou can use")]),e._v(" "),s("ul",[s("li",[e._v("Magic operator "),s("code",[e._v(">>")]),e._v(", "),s("code",[e._v("<<")]),e._v(" or their more verbose api "),s("code",[e._v("t1.set_downstream([t2, t3])")]),e._v(" and "),s("code",[e._v("t1.set_downstream(t2)")]),e._v(". These operators allow you to define complex workflow, handling sequential and parallel tasks, fine !")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://airflow.apache.org/docs/stable/_api/airflow/operators/branch_operator/index.html#module-airflow.operators.branch_operator",target:"_blank",rel:"noopener noreferrer"}},[e._v("Branch operator"),s("OutboundLink")],1),e._v(" in order to choose tasks depending on previous tasks.")]),e._v(" "),s("li",[e._v("Error handling using "),s("code",[e._v("on_failure_callback")]),e._v(" for example.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://airflow.apache.org/docs/stable/_api/airflow/operators/sensors/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sensors"),s("OutboundLink")],1),e._v(" in order to wait for something.")])]),e._v(" "),s("p",[e._v("Since all these allow you to define complex workflow, Airflow lack of some major features in my opinion !")]),e._v(" "),s("h3",{attrs:{id:"first-one-are-dynamic-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-one-are-dynamic-tasks"}},[e._v("#")]),e._v(" First one are dynamic tasks.")]),e._v(" "),s("p",[e._v("I mean create as many tasks depending on previous tasks like "),s("a",{attrs:{href:"/plugins/core/tasks/flows/org.kestra.core.tasks.flows.EachSequential"}},[e._v("Each")]),e._v("."),s("br"),e._v("\nIn Airflow, this is impossible, some people try to "),s("a",{attrs:{href:"https://github.com/mastak/airflow_multi_dagrun",target:"_blank",rel:"noopener noreferrer"}},[e._v("trigger others"),s("OutboundLink")],1),e._v(" dags to emulate this (like or "),s("a",{attrs:{href:"/plugins/core/tasks/flows/org.kestra.core.tasks.flows.Flow"}},[e._v("Flow")]),e._v("), but this will complexify the monitoring of your flow."),s("br"),e._v("\nWe will need to follow 2 dags in order to understand what the issue, the main flow is success and the child are not, really complicated !")]),e._v(" "),s("h3",{attrs:{id:"second-are-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#second-are-sensors"}},[e._v("#")]),e._v(" Second are sensors.")]),e._v(" "),s("p",[e._v("In airflow, you can in the middle of a dag wait for a resource, so If you need a file on a server, the dags will start, the sensors task will wait for the file (keeping the flow running), and restart.")]),e._v(" "),s("p",[e._v("In Kestra, we have reversed the way it works, "),s("a",{attrs:{href:"../docs/architecture#scheduler"}},[e._v("Scheduler")]),e._v(" will wait for the file and will launch a new execution when the condition are match. By this way, we don't have long running dags that are just doing nothing."),s("br"),e._v("\nAlso in Airflow, Sensors are blocking a worker thread waiting. In Kestra, Scheduler have a dedicated thread pool (and scalable also) for handling all time waiting, no scalabilty issue here !")]),e._v(" "),s("h3",{attrs:{id:"task-outputs-vs-xcom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-outputs-vs-xcom"}},[e._v("#")]),e._v(" Task outputs vs XCom")]),e._v(" "),s("p",[e._v("In Airflow, there is no real notion of output for task (mean value that can be used for next task). Xcom are the way for Airflow to respond to thIs problems."),s("br"),e._v("\nBut in the fact, there is major drawback with XCom :")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("TODO Control this")]),e._v(" XCom are not isolated for current execution, they can be overwritten by the concurrent execution of the same dag.")]),e._v(" "),s("li",[e._v("XCom are stored in the database (MySQL or Postgres) so you can store big data between tasks.")]),e._v(" "),s("li",[e._v("No file here, you can exchange file between tasks (except with hack, see below) !")])]),e._v(" "),s("h3",{attrs:{id:"where-is-my-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-is-my-files"}},[e._v("#")]),e._v(" Where is my files ?")]),e._v(" "),s("p",[e._v("Airflow have no notion of files at the heart ! Meaning that if you want to download a file on a task and upload it anywhere on the second tasks, we need to send a viable path to the second one.")]),e._v(" "),s("p",[e._v("In the practice, this can be done with a path on a local filesystem, this work, but what about isolation between flow & scalability (cluster of airflow worker), this does't work. There is still hack to make it work (like Google Composer that use a GSFuse filesystem backup with Google Cloud Storage for example), but in Kestra, we have put the file at the heart with an "),s("a",{attrs:{href:"../docs/architecture#storage"}},[e._v("Internal Storage")]),e._v(" that will allow any task to output files like any others outputs (string, int, ...)")]),e._v(" "),s("h2",{attrs:{id:"entreprise-not-so-ready"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entreprise-not-so-ready"}},[e._v("#")]),e._v(" Entreprise not so ready !")]),e._v(" "),s("h3",{attrs:{id:"please-keep-my-revision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#please-keep-my-revision"}},[e._v("#")]),e._v(" Please keep my revision !")]),e._v(" "),s("p",[e._v("In Airflow, there is no notion of dag version, when you changed your dag, the old execution are changed and if you remove a task, the complete task will disappear for "),s("strong",[e._v("all previous")]),e._v(" executions."),s("br"),e._v("\nNo way to understand what is going with previous dags when you update it.")]),e._v(" "),s("p",[e._v("Kestra have this in mind and keep all the revision for all flows, and let you watch previous at the state they are, let you watch the diff between revisions, ...")]),e._v(" "),s("h3",{attrs:{id:"where-is-the-rbac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-is-the-rbac"}},[e._v("#")]),e._v(" Where is the RBAC ?")]),e._v(" "),s("p",[e._v("Airflow by default have no login, you can enable a lots of "),s("a",{attrs:{href:""}},[e._v("auths")]),e._v(" to secure your webserver. but still no RBAC, I mean this team can handle this list of dag!"),s("br"),e._v("\nThis is a "),s("a",{attrs:{href:"http://airflow.apache.org/docs/stable/security.html?highlight=ldap#rbac-ui-security",target:"_blank",rel:"noopener noreferrer"}},[e._v("RBAC"),s("OutboundLink")],1),e._v(" options, that will allow to specify for each users what "),s("a",{attrs:{href:"http://airflow.apache.org/docs/stable/security.html?highlight=ldap#dag-level-role",target:"_blank",rel:"noopener noreferrer"}},[e._v("dag role"),s("OutboundLink")],1),e._v(" they have.")]),e._v(" "),s("p",[e._v("You understand, Users > Dags, where is the group here ? Who want to handle the security user by user ? In a large company, this is "),s("strong",[e._v("just")]),e._v(" impossible!")])])}),[],!1,null,null,null);t.default=r.exports}}]);