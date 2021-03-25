//GLOBAL VARIABLES
//TODO: SHIFT THE BIGGER DICTS TO FILE
let data = {"Colorado":{"Turnout, % of Voting-age Citizens":4.4,"18-24 Turnout Gap, Citizens, 2018":3.7,"Minority Turnout Gap, Citizens, 2018":2,"Contribution Limits per 4 Years":5,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":4,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":5},"Rhode Island":{"Turnout, % of Voting-age Citizens":2.7,"18-24 Turnout Gap, Citizens, 2018":4.7,"Minority Turnout Gap, Citizens, 2018":2.7,"Contribution Limits per 4 Years":4.7,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":5},"Washington":{"Turnout, % of Voting-age Citizens":4.3,"18-24 Turnout Gap, Citizens, 2018":2.3,"Minority Turnout Gap, Citizens, 2018":2.9,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":1},"California":{"Turnout, % of Voting-age Citizens":3.2,"18-24 Turnout Gap, Citizens, 2018":3.7,"Minority Turnout Gap, Citizens, 2018":2.4,"Contribution Limits per 4 Years":3.9,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":4,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Illinois":{"Turnout, % of Voting-age Citizens":2.9,"18-24 Turnout Gap, Citizens, 2018":3,"Minority Turnout Gap, Citizens, 2018":3,"Contribution Limits per 4 Years":3.7,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":4,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Georgia":{"Turnout, % of Voting-age Citizens":3,"18-24 Turnout Gap, Citizens, 2018":3.4,"Minority Turnout Gap, Citizens, 2018":4.9,"Contribution Limits per 4 Years":4.4,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":3.4,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":1},"Montana":{"Turnout, % of Voting-age Citizens":3.9,"18-24 Turnout Gap, Citizens, 2018":2.6,"Minority Turnout Gap, Citizens, 2018":2.4,"Contribution Limits per 4 Years":5,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":3,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":2,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.6,"Public Can Recount with Copies of Ballots":5},"Nevada":{"Turnout, % of Voting-age Citizens":2.7,"18-24 Turnout Gap, Citizens, 2018":3.8,"Minority Turnout Gap, Citizens, 2018":2,"Contribution Limits per 4 Years":3.9,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":4,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":2,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":3},"Utah":{"Turnout, % of Voting-age Citizens":3.3,"18-24 Turnout Gap, Citizens, 2018":2.9,"Minority Turnout Gap, Citizens, 2018":1.5,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":4.6,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Massachusetts":{"Turnout, % of Voting-age Citizens":3.7,"18-24 Turnout Gap, Citizens, 2018":3,"Minority Turnout Gap, Citizens, 2018":2.8,"Contribution Limits per 4 Years":4.7,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":2,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":3,"Public Can Recount with Copies of Ballots":3},"Ohio":{"Turnout, % of Voting-age Citizens":3,"18-24 Turnout Gap, Citizens, 2018":1.9,"Minority Turnout Gap, Citizens, 2018":3.8,"Contribution Limits per 4 Years":2,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.4,"Public Can Recount with Copies of Ballots":5},"Hawaii":{"Turnout, % of Voting-age Citizens":1.4,"18-24 Turnout Gap, Citizens, 2018":3.2,"Minority Turnout Gap, Citizens, 2018":3.8,"Contribution Limits per 4 Years":4.4,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":4.2,"VBM Ballots Counted, as % of VBM Received, 2018":2,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":2.4,"Public Can Recount with Copies of Ballots":3},"New Jersey":{"Turnout, % of Voting-age Citizens":4.2,"18-24 Turnout Gap, Citizens, 2018":3,"Minority Turnout Gap, Citizens, 2018":3.4,"Contribution Limits per 4 Years":4.4,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":4,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":1,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":3},"District of Columbia":{"Turnout, % of Voting-age Citizens":2.5,"18-24 Turnout Gap, Citizens, 2018":5,"Minority Turnout Gap, Citizens, 2018":2.8,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.6,"Public Can Recount with Copies of Ballots":3},"Missouri":{"Turnout, % of Voting-age Citizens":2.7,"18-24 Turnout Gap, Citizens, 2018":4.1,"Minority Turnout Gap, Citizens, 2018":3.3,"Contribution Limits per 4 Years":4.5,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":4,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.8,"Public Can Recount with Copies of Ballots":3},"Arkansas":{"Turnout, % of Voting-age Citizens":1.2,"18-24 Turnout Gap, Citizens, 2018":3.4,"Minority Turnout Gap, Citizens, 2018":4.1,"Contribution Limits per 4 Years":4.4,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":4.2,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.8,"Public Can Recount with Copies of Ballots":2},"Florida":{"Turnout, % of Voting-age Citizens":3.7,"18-24 Turnout Gap, Citizens, 2018":2.9,"Minority Turnout Gap, Citizens, 2018":3.2,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":3,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":4,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":5},"Oregon":{"Turnout, % of Voting-age Citizens":4.3,"18-24 Turnout Gap, Citizens, 2018":2.9,"Minority Turnout Gap, Citizens, 2018":1,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":2.2,"Public Can Recount with Copies of Ballots":3},"Maryland":{"Turnout, % of Voting-age Citizens":3.6,"18-24 Turnout Gap, Citizens, 2018":3.7,"Minority Turnout Gap, Citizens, 2018":3.5,"Contribution Limits per 4 Years":4.5,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":4,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":5},"Vermont":{"Turnout, % of Voting-age Citizens":4.1,"18-24 Turnout Gap, Citizens, 2018":3.4,"Minority Turnout Gap, Citizens, 2018":4,"Contribution Limits per 4 Years":4.9,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":4,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":4,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":1},"New Mexico":{"Turnout, % of Voting-age Citizens":2,"18-24 Turnout Gap, Citizens, 2018":3.2,"Minority Turnout Gap, Citizens, 2018":1.5,"Contribution Limits per 4 Years":3.9,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":3,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":2.6,"Public Can Recount with Copies of Ballots":2},"Minnesota":{"Turnout, % of Voting-age Citizens":5,"18-24 Turnout Gap, Citizens, 2018":3.2,"Minority Turnout Gap, Citizens, 2018":3,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":2,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.2,"Public Can Recount with Copies of Ballots":2},"North Carolina":{"Turnout, % of Voting-age Citizens":3.6,"18-24 Turnout Gap, Citizens, 2018":3.2,"Minority Turnout Gap, Citizens, 2018":4,"Contribution Limits per 4 Years":3.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":1},"New York":{"Turnout, % of Voting-age Citizens":2.3,"18-24 Turnout Gap, Citizens, 2018":3.8,"Minority Turnout Gap, Citizens, 2018":3.6,"Contribution Limits per 4 Years":3.6,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":3,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":4,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":1},"Iowa":{"Turnout, % of Voting-age Citizens":3.9,"18-24 Turnout Gap, Citizens, 2018":2.5,"Minority Turnout Gap, Citizens, 2018":3.4,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":2,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":3},"Connecticut":{"Turnout, % of Voting-age Citizens":3.6,"18-24 Turnout Gap, Citizens, 2018":3.4,"Minority Turnout Gap, Citizens, 2018":2.8,"Contribution Limits per 4 Years":4.9,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":2,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.4,"Public Can Recount with Copies of Ballots":3},"Alaska":{"Turnout, % of Voting-age Citizens":3.2,"18-24 Turnout Gap, Citizens, 2018":4.1,"Minority Turnout Gap, Citizens, 2018":2,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":2,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":1},"Michigan":{"Turnout, % of Voting-age Citizens":4,"18-24 Turnout Gap, Citizens, 2018":2.5,"Minority Turnout Gap, Citizens, 2018":3.8,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"Wisconsin":{"Turnout, % of Voting-age Citizens":4.3,"18-24 Turnout Gap, Citizens, 2018":3.7,"Minority Turnout Gap, Citizens, 2018":2.2,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":2.6,"Public Can Recount with Copies of Ballots":5},"Kentucky":{"Turnout, % of Voting-age Citizens":2.6,"18-24 Turnout Gap, Citizens, 2018":1.9,"Minority Turnout Gap, Citizens, 2018":4.6,"Contribution Limits per 4 Years":4.5,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":1,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"West Virginia":{"Turnout, % of Voting-age Citizens":1.4,"18-24 Turnout Gap, Citizens, 2018":3.1,"Minority Turnout Gap, Citizens, 2018":2.7,"Contribution Limits per 4 Years":4.4,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"Delaware":{"Turnout, % of Voting-age Citizens":3.5,"18-24 Turnout Gap, Citizens, 2018":3.2,"Minority Turnout Gap, Citizens, 2018":4.6,"Contribution Limits per 4 Years":4.9,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":2},"Pennsylvania":{"Turnout, % of Voting-age Citizens":3.6,"18-24 Turnout Gap, Citizens, 2018":3,"Minority Turnout Gap, Citizens, 2018":3.4,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":3,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":1},"Virginia":{"Turnout, % of Voting-age Citizens":3.9,"18-24 Turnout Gap, Citizens, 2018":3.6,"Minority Turnout Gap, Citizens, 2018":3.5,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":3,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":2},"Kansas":{"Turnout, % of Voting-age Citizens":2.7,"18-24 Turnout Gap, Citizens, 2018":3.4,"Minority Turnout Gap, Citizens, 2018":3.1,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"Arizona":{"Turnout, % of Voting-age Citizens":2.7,"18-24 Turnout Gap, Citizens, 2018":2.7,"Minority Turnout Gap, Citizens, 2018":2.3,"Contribution Limits per 4 Years":3.4,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":2,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":1},"Idaho":{"Turnout, % of Voting-age Citizens":3.1,"18-24 Turnout Gap, Citizens, 2018":2.4,"Minority Turnout Gap, Citizens, 2018":1.9,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"Maine":{"Turnout, % of Voting-age Citizens":4.4,"18-24 Turnout Gap, Citizens, 2018":1,"Minority Turnout Gap, Citizens, 2018":1.4,"Contribution Limits per 4 Years":4.9,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":1},"Nebraska":{"Turnout, % of Voting-age Citizens":3.4,"18-24 Turnout Gap, Citizens, 2018":3.4,"Minority Turnout Gap, Citizens, 2018":1.5,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2.4,"Public Can Recount with Copies of Ballots":2},"Texas":{"Turnout, % of Voting-age Citizens":1.9,"18-24 Turnout Gap, Citizens, 2018":3.1,"Minority Turnout Gap, Citizens, 2018":2.1,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":1,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":1,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":3,"Public Can Recount with Copies of Ballots":1},"Tennessee":{"Turnout, % of Voting-age Citizens":1.8,"18-24 Turnout Gap, Citizens, 2018":3.5,"Minority Turnout Gap, Citizens, 2018":3.6,"Contribution Limits per 4 Years":4.6,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":1,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":1,"Hand Tally Audits, to Check Computer Tallies?":4,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":2,"Public Can Recount with Copies of Ballots":3},"South Carolina":{"Turnout, % of Voting-age Citizens":2.5,"18-24 Turnout Gap, Citizens, 2018":2.6,"Minority Turnout Gap, Citizens, 2018":5,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"Oklahoma":{"Turnout, % of Voting-age Citizens":1,"18-24 Turnout Gap, Citizens, 2018":2.3,"Minority Turnout Gap, Citizens, 2018":3.1,"Contribution Limits per 4 Years":4.8,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":2},"South Dakota":{"Turnout, % of Voting-age Citizens":2.8,"18-24 Turnout Gap, Citizens, 2018":2.5,"Minority Turnout Gap, Citizens, 2018":2,"Contribution Limits per 4 Years":4.7,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":2,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"Alabama":{"Turnout, % of Voting-age Citizens":2.3,"18-24 Turnout Gap, Citizens, 2018":3.2,"Minority Turnout Gap, Citizens, 2018":4.1,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":3},"Louisiana":{"Turnout, % of Voting-age Citizens":2.5,"18-24 Turnout Gap, Citizens, 2018":2.6,"Minority Turnout Gap, Citizens, 2018":4.3,"Contribution Limits per 4 Years":4.4,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":1,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":1,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"Indiana":{"Turnout, % of Voting-age Citizens":2,"18-24 Turnout Gap, Citizens, 2018":3.5,"Minority Turnout Gap, Citizens, 2018":3.7,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":1,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":1,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":3,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":2},"New Hampshire":{"Turnout, % of Voting-age Citizens":4.3,"18-24 Turnout Gap, Citizens, 2018":3.4,"Minority Turnout Gap, Citizens, 2018":3.2,"Contribution Limits per 4 Years":3.9,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":1},"Wyoming":{"Turnout, % of Voting-age Citizens":2.5,"18-24 Turnout Gap, Citizens, 2018":1.7,"Minority Turnout Gap, Citizens, 2018":1.7,"Contribution Limits per 4 Years":4.7,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":1,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5},"North Dakota":{"Turnout, % of Voting-age Citizens":2.5,"18-24 Turnout Gap, Citizens, 2018":2.5,"Minority Turnout Gap, Citizens, 2018":1.6,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":3,"Do Votes Have a Paper Trail?":3,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":2},"Mississippi":{"Turnout, % of Voting-age Citizens":1.8,"18-24 Turnout Gap, Citizens, 2018":2.2,"Minority Turnout Gap, Citizens, 2018":5,"Contribution Limits per 4 Years":1,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":1,"Good VBM List, Tracks Address Changes & Deaths":1,"Vote by Mail with No Specific Reason?":4,"Mail Application or Ballot to All?":1,"Process Ballots on Receipt, before Election Day?":1,"Number of Days when Voters Can Cure Signature Problems, after Election Day":1,"VBM Ballots Counted, as % of VBM Received, 2018":2,"Do Votes Have a Paper Trail?":1,"Hand Tally Audits, to Check Computer Tallies?":1,"Good Audit Sample, to Check Computer Tallies?":1,"Audit All Contests? Number of Contests Checked":1,"Public Can Recount with Copies of Ballots":5}}

var weights = {"Turnout, % of Voting-age Citizens":5,"18-24 Turnout Gap, Citizens, 2018":5,"Minority Turnout Gap, Citizens, 2018":5,"Contribution Limits per 4 Years":5,"3rd Party Ballot Access":5,"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders":5,"Good VBM List, Tracks Address Changes & Deaths":5,"Vote by Mail with No Specific Reason?":5,"Mail Application or Ballot to All?":5,"Process Ballots on Receipt, before Election Day?":5,"Number of Days when Voters Can Cure Signature Problems, after Election Day":5,"VBM Ballots Counted, as % of VBM Received, 2018":5,"Do Votes Have a Paper Trail?":5,"Hand Tally Audits, to Check Computer Tallies?":5,"Good Audit Sample, to Check Computer Tallies?":5,"Audit All Contests? Number of Contests Checked":5,"Public Can Recount with Copies of Ballots":5}

var polygonSeries;
let stateList = {
    'Arizona': 'AZ',
    'Alabama': 'AL',
    'Alaska':'AK',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
}

//CONVERT FROM JSON TO AMCHARTS FRIENDLY INPUT
function createMapData(){
    let res = []
    Object.entries(stateList).forEach(([k,v]) => {
        let obj = {}
        let stateInfo = data[k]
        let aggregate = 0
        console.log(k)
        Object.entries(stateInfo).forEach(([k2,v2]) => { 
            console.log(parseInt(weights[k2])) 
            console.log(parseInt(v2)) 
            aggregate += (parseInt(v2) * parseInt(weights[k2]))
            console.log(aggregate)
        })
        obj['id'] = 'US-' + v
        obj['value'] = aggregate
        console.log(obj)
        res.push(obj)
    })
    return res
}

//UPDATE CHART WHENEVER WEIGHTS CHANGE
function updateChart(){
    Object.entries(weights).forEach(([k,v]) => { 
        if(parseInt(document.getElementById(k).value)){
            weights[k] = parseInt(document.getElementById(k).value)
        }
        else{
            weights[k] = 0
        }
    })
    console.log('updated')
    console.log(weights)
    polygonSeries.data = createMapData()
    return
}

//CREATE HTML FOR SIDE BAR / SETTINGS SECTION
function createWeightsHTML(){
    
    let html = '<form class="needs-validation" novalidate>'
    Object.entries(weights).forEach(([k,v]) => {  
        html += '<div class="form-group">'
        html += '<label for="uname">'+ k +'</label>'
        html += '<input type="text" class="form-control" id="' + k + '"' + 'placeholder="Enter weight" name="uname" required>'
        html += '<div class="valid-feedback">Valid.</div>'
        html += '<div class="invalid-feedback">Please fill out this field.</div>'
        html += '</div>'
    })
    html += '<button type="button" onclick="updateChart()" class="btn btn-primary">Submit</button>'
    html += '</form>'
    document.getElementById('weights-html').innerHTML = html;
}

//CREATE CHART FUNCTION
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

        // Create map instance
    chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_usaLow;

    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();

    // Create map polygon series
    polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: chart.colors.getIndex(1).brighten(1),
        max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set heatmap values for each state
    console.log(createMapData())
    polygonSeries.data = createMapData()
    // polygonSeries.data = [
    //   {
    //     id: "US-AL",
    //     value: 477474
    //   },
    //   {
    //     id: "US-AK",
    //     value: 626932
    //   },
    //   {
    //     id: "US-AZ",
    //     value: 5130632
    //   },
    //   {
    //     id: "US-AR",
    //     value: 2673400
    //   },
    //   {
    //     id: "US-CA",
    //     value: 33871648
    //   },
    //   {
    //     id: "US-CO",
    //     value: 4301261
    //   },
    //   {
    //     id: "US-CT",
    //     value: 3405565
    //   },
    //   {
    //     id: "US-DE",
    //     value: 783600
    //   },
    //   {
    //     id: "US-FL",
    //     value: 15982378
    //   },
    //   {
    //     id: "US-GA",
    //     value: 8186453
    //   },
    //   {
    //     id: "US-HI",
    //     value: 1211537
    //   },
    //   {
    //     id: "US-ID",
    //     value: 1293953
    //   },
    //   {
    //     id: "US-IL",
    //     value: 12419293
    //   },
    //   {
    //     id: "US-IN",
    //     value: 6080485
    //   },
    //   {
    //     id: "US-IA",
    //     value: 2926324
    //   },
    //   {
    //     id: "US-KS",
    //     value: 2688418
    //   },
    //   {
    //     id: "US-KY",
    //     value: 4041769
    //   },
    //   {
    //     id: "US-LA",
    //     value: 4468976
    //   },
    //   {
    //     id: "US-ME",
    //     value: 1274923
    //   },
    //   {
    //     id: "US-MD",
    //     value: 5296486
    //   },
    //   {
    //     id: "US-MA",
    //     value: 6349097
    //   },
    //   {
    //     id: "US-MI",
    //     value: 9938444
    //   },
    //   {
    //     id: "US-MN",
    //     value: 4919479
    //   },
    //   {
    //     id: "US-MS",
    //     value: 2844658
    //   },
    //   {
    //     id: "US-MO",
    //     value: 5595211
    //   },
    //   {
    //     id: "US-MT",
    //     value: 902195
    //   },
    //   {
    //     id: "US-NE",
    //     value: 1711263
    //   },
    //   {
    //     id: "US-NV",
    //     value: 1998257
    //   },
    //   {
    //     id: "US-NH",
    //     value: 1235786
    //   },
    //   {
    //     id: "US-NJ",
    //     value: 8414350
    //   },
    //   {
    //     id: "US-NM",
    //     value: 1819046
    //   },
    //   {
    //     id: "US-NY",
    //     value: 18976457
    //   },
    //   {
    //     id: "US-NC",
    //     value: 8049313
    //   },
    //   {
    //     id: "US-ND",
    //     value: 642200
    //   },
    //   {
    //     id: "US-OH",
    //     value: 11353140
    //   },
    //   {
    //     id: "US-OK",
    //     value: 3450654
    //   },
    //   {
    //     id: "US-OR",
    //     value: 3421399
    //   },
    //   {
    //     id: "US-PA",
    //     value: 12281054
    //   },
    //   {
    //     id: "US-RI",
    //     value: 1048319
    //   },
    //   {
    //     id: "US-SC",
    //     value: 4012012
    //   },
    //   {
    //     id: "US-SD",
    //     value: 754844
    //   },
    //   {
    //     id: "US-TN",
    //     value: 5689283
    //   },
    //   {
    //     id: "US-TX",
    //     value: 20851820
    //   },
    //   {
    //     id: "US-UT",
    //     value: 2233169
    //   },
    //   {
    //     id: "US-VT",
    //     value: 608827
    //   },
    //   {
    //     id: "US-VA",
    //     value: 7078515
    //   },
    //   {
    //     id: "US-WA",
    //     value: 5894121
    //   },
    //   {
    //     id: "US-WV",
    //     value: 1808344
    //   },
    //   {
    //     id: "US-WI",
    //     value: 5363675
    //   },
    //   {
    //     id: "US-WY",
    //     value: 493782
    //   }
    // ];

    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;

    // Set up custom heat map legend labels using axis ranges
    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "unequitable";
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "equitable";

    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
        return "";
    });

    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#3c5bdc");

}); // end am4core.ready()

//INITIALIZE THE WEIGHTS
createWeightsHTML()