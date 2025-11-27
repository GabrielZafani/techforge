
abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}


class Election extends VoteSystem {

    voteFor(candidate: string): void {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 0;
        }
        this.votes[candidate]++;
    }

    getResults(): object {
        return this.votes;
    }
}


class Poll extends VoteSystem {

    voteFor(candidate: string): void {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 0;
        }
        this.votes[candidate]++;
    }

    getResults(): object {
        
        const sorted = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([candidate, votes]) => ({ candidate, votes }));

        return sorted;
    }
}



const election = new Election();
election.voteFor("Alice");
election.voteFor("Gabriel");
election.voteFor("Alice");
election.voteFor("Beatriz");

console.log("Election Results:", election.getResults());


const poll = new Poll();
poll.voteFor("Café");
poll.voteFor("Chá");
poll.voteFor("Café");
poll.voteFor("Suco");

console.log("Poll Results:", poll.getResults());
