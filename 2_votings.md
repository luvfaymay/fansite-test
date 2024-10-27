---
title: Ongoing Votings
layout: landing
description: ""
image: assets/images/banner5.jpeg
nav-menu: true
---

<!-- Main -->
<div id="main">
    <section id="one">
        <div class="inner">
            <header class="major">
                <h2>{% t voting.title %}</h2>
            </header>
            <p>{% t voting.translation_status %}</p>
            <p>{% t voting.description %}</p>
            <ol>
                {% for instruction in site.translations[site.lang].voting.instructions %}
                    <li>{{ instruction }}</li>
                {% endfor %}
            </ol>
        </div>
    </section>
    <section id="two" class="spotlights">
        <section>
            <div class="image">
                <img src="{{ 'assets/images/r7.jpeg' | relative_url }}" alt="starlight" data-position="center center">
            </div>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h3>{% t voting.yent_award.title %}</h3>
                    </header>
                    <p>{% t voting.yent_award.description %} <a class="vote-link" href="https://yentertainawards.mcot.net/vote/view/Rising">{% t common.vote_for_them %}</a></p>
                </div>
            </div>
        </section>
        <section>
            <div class="image">
                <img src="{{ 'assets/images/votekazz.png' | relative_url }}" alt="kazz" data-position="center center">
            </div>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h3>{% t voting.kazz_awards.title %}</h3>
                    </header>
                    <p>{% t voting.kazz_awards.description %}</p>
                    <ol>
                        {% for voting_rule in site.translations[site.lang].voting.kazz_awards.voting_rules %}
                            <li>{{ voting_rule }}</li>
                        {% endfor %}
                    </ol>
                    <p>{% t voting.kazz_awards.vote_link_desc1 %} <a class="vote-link" href="https://worldwide.kazzmarket.com/product/vote-saowaisai-2024/">{% t voting.kazz_awards.vote_link1 %}</a></p>
                    <p>{% t voting.kazz_awards.vote_link_desc2 %} <a class="vote-link" href="https://today.line.me/th/v2/poll/JPmrlmM">{% t voting.kazz_awards.vote_link2 %}</a></p>
                    <p>{% t voting.kazz_awards.notes %} <a class="vote-link" href="https://x.com/4ever_Marvelous/status/1838082471415755176">{% t voting.kazz_awards.notes_link %}</a></p>
                </div>
            </div>
        </section>
        <section>
            <div class="image">
                <img src="{{ 'assets/images/starfocus.jpeg' | relative_url }}" alt="starfocus" data-position="center center">
            </div>
            <div class="content">
                <div class="inner">
                    <header class="major">
                        <h3>{% t voting.starfocus.title %}</h3>
                    </header>
                    <p>{% t voting.starfocus.description %} <a class="vote-link" href="https://www.starfocus.online/spu/704796635758186497">{% t common.vote_for_them %}</a></p>
                </div>
            </div>
        </section>
    </section>
</div>