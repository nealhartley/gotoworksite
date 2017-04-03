/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//model for ther blog angular application

// Define the `phonecatApp` module
var BlogApp = angular.module('BlogApp', []);

// Define the `Blogcontroller` controller on the `BlogApp` module
BlogApp.controller('BlogController', function BlogController($scope) {
  //blog postings 
    $scope.blogs = [
      
      /*{  ADD this code snippet above rest to add a new blog post (remove the arrowed comments next to each item)
      
      name: '10/03/2017',           <--date your blog post here
      content: 
        [{paragraph : 'lalalala'},  <--paragraphs go here
        {paragraph: 'blah'}]        <--putting each paragraph under each "paragraph tag" 
                                       will add spaces between the
    },*/
        
    { 
      
      name: 'Week Four',    
      image:'../images/blogImages/weekfour.png',
      content: 
        [{paragraph : 
                    'We have had another great week! We started off with a meeting between the whole team to make sure we were all heading in the same direction, It also seemed like we had begun to relax a little on the routine of having daily meetings, and these seemed like things that needed addressing. The meeting went really well and really helped us right the ship, it has been smooth sailing since.'},  
        {paragraph: 
                    'A big highlight of the week was the solutions validation meeting we had with the ministry. It seems we have managed to capture the elements of the problem the ministry was most focused on, and they seem excited about the ideas we pitched to them. Seeing this excitement has motivated us, and we are ready to get cracking with our next step.'},
        {paragraph : 
                    'So what is our next step? We want to go and spend some serious time with the people we are going to be making something for. This would all be for naught if we did not deliver something that would really help people.'},
        {paragraph : 
                    'Well that is all from the week just been. We are now going to go do some interviews and we will let you know how that is going in our next blog post.'}]       
    },
        
        {
      
    name: 'PUG CAM',           
    image: '../images/blogImages/pugcam.jpg',  
    content:
        [{paragraph : 
                'Many pugs, many, many, many pugs, dun, dun, dun, dun. We have had an interesting development that seems worthy of its own blog post. “What could this be?” You may be saying. It is, of course, the almighty pug cam. Scott has set up a camera in his house in order to allow us a live feed of his two pugs day to day activities. '},  
        {paragraph : 
                'Pug cam is a good look at one of the many forms innovation can take, and to be honest it’s nice to be able to take a breather from work and talk to pugs for 5 minutes.'}]        
        },   
        {  
      
    name: 'Week Three - Rapid Failure',           
    image: '../images/blogImages/blogthree.jpg',  
    content:
        [{paragraph : 
                'What can we say about week three? It’s been a roller coaster. We started with a near disaster with our google drive and for a moment there it seemed like all progress we had made so far might have been lost. Luckily for us we managed to find our missing information and it seemed like we were in for another stellar week.'},  
        {paragraph : 
                    'That was until we went into our meeting on Tuesday. It has been stressed to us since day one that failing quickly and rapidly pivoting was a necessary part of this process, but it still hurt none the less when we realised that the path we had begun to look down was a dead end. Scramble mode naturally ensued and we begun reevaluating the problems we had validated with the agency in our earlier meetings. This led us to some possible avenues and some new ideas to investigate.'},   
        {paragraph : 
                    'We went into our meeting with an agency member on thursday apprehensive that we would once again have our  ideas devalued and would end up in real panic mode. Luckily for us the meeting went amazing! '}, 
        {paragraph: 
                    'So once again we are feeling like we are well on the way towards finding a viable solution. If anything, the lows have made the highs feel even higher and without them we would not have come up with the new innovative ideas that we are starting to look towards.'}]        
    },
        
    {
      name: 'Week Two',
      image: '../images/blogImages/blogtwo.jpg',
      content: 
        [{paragraph : 
                'Wow, take a breath. That was a long, tiring, and rewarding week for our team. '},
        {paragraph: 
                    'After the first week of R9 workshops this was our first opportunity as a team to really get down to the business of solving problems. The harder the better we say!'},
        {paragraph: 
                    'Because we run an agile fast paced team our week always starts with a scrum session. I won’t bore you with the details of that… but we had a lot of tasks in this week’s sprint! We got our website up (link) and business cards printed, built a Value Proposition Canvas for our first customer segment, and ran a problem validation workshop with our agency. '}, 
        {paragraph: 
                    'Our win of the week? We are on track to validate our customer’s problems. We’re not all the way there yet but we feel pretty darn confident after getting 70% there in our first problem validation workshop. '},
        {paragraph: 
                    'Next week? We’ll be focussing in on this weeks learnings so that we can continue to validate our problem assumptions and continue to pivot our way onto the path leading to a viable MVP solution. '},
        {paragraph: 
                    'Well, we’re off to celebrate St Paddy’s day now. But, because an entrepreneur doesn’t have an off switch you’ll  probably see us running secret problem interviews with everyone we meet!'}
        ]
    },
    {
       name: 'Week One',
       image: '../images/blogImages/artwork.jpg',
      content: 
        [{paragraph :
            'The first week of R9 Accelerator 3.0 draws to close. This week was ‘Bootcamp’, a jam-packed week of workshops, sessions and team building exercises, to prime the R9 ‘cohort’ with the tools and methodologies necessary to carry us forward'},
        {paragraph: 
            'We have learnt a lot this week. Highlights include a presentation by a Gov Tech guru, who spoke to us live from Austin Texas, and inspirational talks on subject matter such as exponential technology, lean start up and market validation.'},
        {paragraph:
            'There was also content we already knew well, such as Agile, Lean, design thinking, wellness and resilience. However, with such a wide range of stakeholders, with different levels of skills and experience, it is no surprise Creative HQ took such a uniform approach.'},
        {paragraph:
            'What really stood out to me this week is our team. Teamwork is the most important contributor to success in this programme, and we are getting on ridiculously well! We have a quiet confidence about us, because with our breadth of knowledge, and range of skills, we have the potential to go far in this programme.'}
        ]
    }
  ];
  
  //the list for surveys on the sutrvey page
  $scope.surveys = [
      
        {          
          title: 'survey one',
          description: 'this survey is all about people going hard and chugging back brewskies like my main man Scott',
          image: '../images/surveyImages/pugbunny.jpg',
          link: 'https://www.facebook.com/scott.hexadecimal?fref=ts&ref=br_tf'
      },
      
        {          
          title: 'survey two',
          description: 'this survey is all about funky psychedelic music and Kenyons impressive smile',
          image: '../images/surveyImages/pugbunny.jpg',
          link: 'https://www.facebook.com/kenyon.shankie?fref=ts'
      }
      
    ];
});

