import React, { Component } from 'react';

class Background extends Component {
    render() {
        return (
            <div className="container">
                <section id="main" >
                    <div class="inner">
                        <header class="container">
                            <h1>About Us</h1>
                        </header>
                        <div className="headcommingsoon">
                            Coming Soon
                    </div>
                    </div>
                </section>

                <div className="container" style={{ display: "none" }}>
                    <div>
                        Interaction sequence:
                <ol>
                            <li>You will get a randomly generated set of 3 questions (e.g., what is your perfect day like, when was the last time you cried and why, what's a regret you have);
</li>
                            <li>The invitee (person who was invited)picks the question you'd like both parties to answer;
</li>
                            <li>The inviter will answer first.
</li>
                            <li>The chat bot (played by a Real8 team member during this data gathering phase) will prompt each of you in how to respond more open-heartedly throughout the interaction
</li>
                        </ol><br />
                This sequence involves asynchronous timing like in texting-- you can take a little time to be thoughtful in your response,but we'd like this interaction to be completed within half an hour. It's like regular texting or emailing except there is a third party facilitrating an interaction that has a structured beginning, middle and end, and you both have the intention of wanting to be more real and get closer.
                </div>
                </div>

                <div className="container" style={{ display: "none" }}>
                    <h1>Why Real8</h1>
                    <br />
                    <div>Benefits:
                <ol>
                            <li>Use an empirically supported method to build intimacy and closer relationships</li>
                            <li>Get closer to someone you don't know in just half an hour</li>
                            <li>Or deepen your connection with someone important to you</li>
                            <li>The whole process is conveniently done through text messages<br />(amazing how well it works even over text)</li>
                        </ol>
                    </div>
                </div>
            </div>


        );
    }
}

export default Background;