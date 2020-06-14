1.WHAT IS AN API?
•	An API is a software intermediate which allows two applications to communicate each other.
•	API stands for Application Programming Interface.
Example: 1. Real time Example: If we are going to a restaurant where we are given a choice as menu. If we are choosing the items to eat there should be a waiter to note our orders to cook in the kitchen. Here the waiter communicates between the customer and kitchen like wise the API communicates with the two applications.


2. What is REST and which methods are there in REST ?
•	REST is known as Representational State Transfer.
•	It is architectural style for distributed hypermedia systems.
•	First presented by Roy Fielding.
Methods of REST
•	Post   - Create
•	GET – Read
•	PUT -Update/Replace
•	PATCH –Update/Modify
•	DELETE  -Delete


3. Which REST method will be cached in browser unless otherwise explicitly mentioned by server ?
	GET method will be catched in browser unless otherwise explicitly mentioned by server.The GET method is used to read or retrival.Get method returns XML or JSON representation.In error case it returns 400(bad request) or 404 error(not found).


4. Which REST method is idempotent and which method is not idempotent ? Explain with a small example.
               int i=30;   // idempotent
               i++; // not idempotent
•	POST is an idempotent method….Example:A client wants to update resources through POST.Since it is an idempotent calling results in incorrect.It is known as safe methods.
•	HTTP is non-idempotent..Example:To access an database or image from HTML page JSP page tales,we use GET method,it will return same object.If we want to access database like customer information we want to use POST method.


5. Which REST method should be used to deal with user sensitive data like credit card information etc. ?
	PATCH method cand be used to deal with user sensitive data like credit card informations.


6. What is the difference between http and https ? Explain shortly how https works.
•	HTTP is unsecured while HTTPS is secured.
•	HTTP sends data over port 80 while HTTPS uses port 443.
•	HTTP operates at application layer while HTTS operates at transport layer.
•	HTTP does not require domain validation,whereas HTTPS requires validation .
•	HTTP has no encryption while HTTPS is encrypted before sending.
WORKING OF HTTPS: The protocol over which data is sent between your browser and the website that you are connected to. The 'S' at the end of HTTPS stands for 'Secure'. It means all communications between your browser and the website are encrypted. HTTPS is often used to protect highly confidential online transactions like online banking and online shopping order forms.

7.What is caching ? How does it help an application ?
•website/application developers try out and use different techniques to optimize performance and improve speed. One such method is web Caching. In this method, the shared page elements viz, JavaScript, CSS, images, etc. are downloaded and stored closer to the user so the browser can retrieve this data from the stored location, instead of querying the web server again.
• Helping:Reducing latency,Content availablity,Avoid network congestion.

8.What is the main difference between traditional relational databases and nosql databases ?
•NoSQL tends to be a better option for modern applications that have more complex, constantly changing data sets, requiring a flexible data model that doesn’t need to be immediately defined. Most developers or organizations that prefer NoSQL databases, are attracted to the agile features that allow them to go to market faster, make updates faster. Unlike traditional, SQL based, relational databases, NoSQL databases can store and process data in real-time.
•While SQL databases do still have some specific use cases, NoSQL databases have many features that SQL databases are not capable of handling without tremendous costs, and critical sacrifices of speed, agility, etc.


9.Explain shortly MVC pattern in developing backend applications.
•The term MVC i.e. (Model - View - Controller) is mostly used in Software project development which has basically front end & back end.
•So, front end refers to the UI (User Interface) where user viewing and interacting like frames, websites and so on, whereas back end refers to the storage area of that front end, so it may be database table, XML file or any data structure which has capable to hold the values which can be any information like user credentials, any other valuable domain information & so on.
•So, basically in Software project’s, front end is widely referred as View, where developers and designers creates well furnished, interactive User Interface’s for users of that system.
•Model refers to the structure which holds an object’s attribute required and important for the domain. [e.g. if we are developing user registration form for Student Admission System, So what details we are accepting from students on front end and which we further going to be store in database table, those values are intermediately hold by Model defined files.] In other words, we can say that Model files has one to one with database/ storage structures attributes in terms of variable’s which holds an intermediate values either from front end or from back end as required. We may refer it as session variables also.
•Controller as name suggests used to controlling the whole system. Those are methods/procedures or files act as mediator between front end, model files and actual databases. Controller calls the actual methods written when any event triggers from front end and also responsible to establish connections with databases and executing queries on databases from high level programming languages.
So, in short, MVC architecture provides distributed, well-organized and structured work flow in development of software projects. Also it reduces overhead of code on single files.

10.What is event loop in javascript ? Explain with an example
•The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading.


11.What is the difference between git pull and git fetch ?
•git fetch really only downloads new data from a remote repository - but it doesn't integrate any of this new data into your working files. Fetch is great for getting a fresh view on all the things that happened in a remote repository.
•Due to it's "harmless" nature, you can rest assured: fetch will never manipulate, destroy, or screw up anything. This means you can never fetch often enough.
•git pull, in contrast, is used with a different goal in mind: to update your current HEAD branch with the latest changes from the remote server. This means that pull not only downloads new data; it also directly integrates it into your current working copy files.


	
