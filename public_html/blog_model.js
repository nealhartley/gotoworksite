/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//model for ther blog angular application

// Define the `phonecatApp` module
var BlogApp = angular.module('BlogApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
BlogApp.controller('BlogController', function BlogController($scope) {
  $scope.blogs = [
      
      /*{  ADD this code snippet above rest to add a new blog post (remove the arrowed comments next to each item)
      
      name: '10/03/2017',           <--date your blog post here
      content: 
        [{paragraph : 'lalalala'},  <--paragraphs go here
        {paragraph: 'blah'}]        <--putting each paragraph under each "paragraph tag" 
                                       will add spaces between the
    },*/
        
        {  
      
      name: 'Week Three - Rapid Failure',           
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
      image: 'images/blogImages/blogtwo.jpg',
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
       image: 'images/blogImages/artwork.jpg',
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
});

