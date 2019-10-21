
### Concepts 
#### 1. Concerns regarding REST APIs:
* Need for Input Validation and Sanitization
  * API parameters are a way for users to insert data into our applications but malicious users may use this to insert malicious content that may affect our application and data. Hence, we need to validate all the input data to check if users are inputing only values that are allowed or expected.
  * We also need to sanitise input in order to make sure that there are no malicious SQL queries, HTML tags or JavaScript code in the input. These need to be immediately filtered out or it may be possible that they get triggered somewhere within the system and affect our databases and operating systems.
* Since REST uses HTTP as its underlying protocol, an attacker may get control over the HTTP request and response and hence breaching the application and leaking information.
* REST APIs can be hard to debug as every single transaction consists of multiple blocks of code located at different places that participate to make that transaction successful. For example, the HTTP request method, checking the reponse code, etc. 
* In order to develop REST APIs, you need to develop the design first, think of all the use cases and resources and affordances.
* Huge entry barrier in training and learning REST APIs.

#### 2. Compare and RESTful architecture vs. a graph query language:

| RESTful Architechture | Graph Query Language |
| ------ | ------ |
| REST APIs are designed to take advantage of existing protocols and hence developers do not need to install additional software or libraries when creating a REST API.| GraphQL was developed to cope with the need for more flexibility and efficiency over REST APIs.|
| REST is not constrained to a particular format and can return XML, JSON, YAML or any other format depending on what the client requests. | GraphQL only works with JSON. |
|REST APIs have multiple endpoints, they can leverage native HTTP caching to avoid refetching resources.| Graph QL lacks built in cache support.|
|Error handling is easier in REST APIs as it has separate response codes assigned for different types of error. For e.g.,  403 - Forbidden, 404 - NotFound etc| Queries in GraphQL always return a HTTP status code of 200, regardless of whether or not that query was successful. Hence error handling is more difficult. |
| Rest APIs are simple to develop and hence suitable for data that is relatively consistent over time.| GraphQL on the other hand is more suitable when data is rapidly changing over time where REST APIs can have major pain points.|
| REST APIs always returns the entire object in its response every time which leads to overfetching and performance issues. | In GraphQL, clients can dictate exactly what they need from the server, and receive that specific data in a predictable way.|
| In the case where you need to access multiple resources, REST APIs will need to make multiple requests. | GraphQL on the other hand can do it in a single query to the GraphQL server that includes the concrete data requirements. |

### Screencast
[Google Drive link]

### References
* [5 Terrifying REST API security issues you need to destroy now]
* [TOP 7 REST API Security Threats]
* [REST vs. RPC: what problems are you trying to solve with your APIs?]
* [REST vs GraphQL]
* [Advantages and Disadvantages of GraphQL]


[5 Terrifying REST API security issues you need to destroy now]: https://blog.openly.co/5-terrifying-rest-api-security-issues-you-need-to-destroy-now-e9525d6ed13
[TOP 7 REST API Security Threats]: https://blog.restcase.com/top-7-rest-api-security-threats/
[REST vs. RPC: what problems are you trying to solve with your APIs?]: https://cloud.google.com/blog/products/application-development/rest-vs-rpc-what-problems-are-you-trying-to-solve-with-your-apis
[Advantages and Disadvantages of GraphQL]: https://stablekernel.com/advantages-and-disadvantages-of-graphql/
[REST vs GraphQL]: https://goodapi.co/blog/rest-vs-graphql
[Google Drive link]: https://drive.google.com/file/d/1MvI-igy1kljEEmQRQhtAh41E0F8z3vpQ/view?usp=sharing
