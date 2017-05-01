$(document).ready(function(){




            // housekeeping: setup vars, 1st quote
            var quote = "";
            var author = "";
            changeBackground();
            createQuote();

            $("#twitter-value").on("click",function()
            {
                var q = $(".quote-text").text();
                var a = $(".author-text").text();
                var twitterURL = "https://twitter.com/intent/tweet?text=" + q + " " + a;
                window.open(twitterURL, 'twitter');
                return false;
            });



            $("#quote").on("click",function(){
                changeBackground();
                createQuote();
            });

            // generate numbers for changing background colors
            function generateRandomNum(min,max){
                return Math.floor(Math.random()*(max-min+1)+min);
            }

            function changeBackground(){
                var colorR = generateRandomNum(0,255);
                var colorG = generateRandomNum(0,255);
                var colorB = generateRandomNum(1,255);
                var colorA = generateRandomNum(0,4);


                $(".container-fluid").css("background-color","rgba("+ colorR + "," + colorG + "," + colorB + "," + colorA + ")");
                $("body").css("background-color","rgba("+ colorR + "," + colorG + "," + colorB + "," + colorA + ")");
                $("p").css("color","rgba("+ colorR + "," + colorG + "," + colorB + "," + colorA + ")");

            }


//generate quote thru ajax call
            function createQuote(){
                $.ajax({
                    headers: {
                        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
                    success: function(response) {
                        var r = JSON.parse(response);
                        currentQuote = r.quote;
                        currentAuthor = r.author;
                        $('.quote-text').text(r.quote);
                        $('.author-text').html(r.author);
                    }
                });
            };
        });