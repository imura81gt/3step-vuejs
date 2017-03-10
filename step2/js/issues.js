var ISSUES = "https://api.github.com/repos/[R]/issues?state=open"
var app = new Vue({
    el: "#issues",
    data: {
        repository: "vuejs/vue",
        issues: [],
    },
    watch: {
      repository: "fetchData"  
    },
    created: function() {
        this.fetchData()
    },
    filters: {
        formatDate: function (v) {
            return v.replace(/T|Z/g, ' ')
        }
    },
    computed: {
        hasIssue: function () {
            return this.issues.length > 0 ? true : false;
        }
    },
    methods: {
        fetchData: function () {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open("GET", ISSUES.replace("[R]", this.repository));
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                                        self.issues = JSON.parse(xhr.responseText);
                    } else {
                        self.issues = [];
                        console.error(xhr.statusText);
                    }
                }
                xhr.onerror = function (e) {
                        self.issues = [];
                        console.error(xhr.statusText);
                };
            };
            xhr.send();
        }
    }
    
})