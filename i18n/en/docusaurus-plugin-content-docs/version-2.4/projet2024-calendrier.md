# Provisional calendar

<u>Caveat</u>

This provisional calendar for the [Abes’s 2024-2028
project](https://projet2024.abes.fr/docs/2.4/projet2024) was drawn up
based on our current state of knowledge. It may change over the period
depending on progress but makes it possible to state our initial intent.

> Reference :
> [https://projet2024.abes.fr/docs/2.4/projet2024-calendrier](https://projet2024.abes.fr/docs/2.4/projet2024-calendrier)


## The Abes’ metadata management system

The timetable for the renewal of the Abes’ Metadata Management System
(MMS) is presented in two parts:

- The first part on “Reinformatization - Service Provider” refers to the
  work to be carried out between the Abes and the service provider(s)
  for its reinformatization.

- The second part on “Reinformatization – Abes refers to the work of the
  Abes teams on the current system and the necessary work to migrate
  over to the new system.

The details of the dates and phases are provided for information
purposes only at this stage but demonstrates our intention to proceed
via several phases.

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

    section IT System Modernization - Vendor
      need expression         :rp1,2024-01-01,180d
      benchmarking and sourcing  :rp2,2024-01-01,180d
      writing specifications        :rp3,2024-04-01,180d
      tendering process           :rp4,after rp3,1y
      SMM selection finalized     :milestone,m1,after rp4, 0d
      Vendor support             :rp5,after rp4,2028-12-31
      SMM testing                 :milestone,m2,2026-01-01,0d
      SMM production phase 1     :milestone,m3,2027-01-01,0d
      SMM production phase 2     :milestone,m4,2027-10-01,0d
      SMM production phase 3     :milestone,m5,2028-10-01,0d
      Vendor maintenance        :rp6,2027-01-01,2028-12-31
    
    section IT System Modernization - Abes
      phase 1 - core system             :ra1,2024-09-09,2026-01-01
      phase 2 - satellite integration        :ra2,2026-01-01,2027-03-31
      phase 3 - satellite redesign and new services :ra3,2027-01-01,2028-12-31

    End of project           :milestone,2028-12-31,0d
```

The details of the breakdown between Abes and the
service provider(s) have not yet been finalised.

Stages 1, 2 and 3 of the contracts specify that we will request that the
service provider(s) provide **three successive deliveries of the MMS**.
The content of these deliveries will be defined during the expression of
needs and benchmarking stage. Each delivery will have a set perimeter
which may contain functions and/or data to be managed by the MMS.

Phases 1, 2 and 3 are not described in this calendar. They reflect the
high degree dependency explained in part 2 of the project.

- Phase 1 corresponds to preparing everything necessary with the service
  provider with the aim of opening the MMS for public testing. This
  phase includes for example the installation, configuration,
  preparation and migration phases for data in the MMS, to be organised
  with or without the support of the service provider(s).

<!-- -->

- Phase 2 corresponds to the work which cannot be pushed back to phase
  3, aimed either at activating functions and features in the MMS to
  replace certain existing satellite applications, or to connect
  satellite applications as quickly as possible which cannot be replaced
  or whose functions include the ability to write to the MMS. Indeed,
  satellite applications with the ability to write must be replaced or
  connected as a priority as once the MMS is in production, the data
  will be managed therein. It should be noted that this phase 2 is short
  and if we don’t have enough time, temporary closures of the
  application will be necessary to be able to keep to our MMS production
  timetable.

- Phase 3 is the logical next step following on from phase 2 and
  corresponds to the work involved in opening the new services provided
  natively in the new MMS to the networks and the work involved in
  connecting the last satellite applications to the MMS. This work may
  require redesigns or the elimination of the accumulated technical
  debt.

## A “metadata base” for the HER sector

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Structure reference data              :d1,2024-01-01,2026-12-31
      Personnel reference data               :d3,2024-01-01,2028-12-31
      Automation of printed copies :d4,2027-06-01,2028-12-01
      New data flows / APIs to be created             :d5,2027-06-01,2028-12-31
      APIs for writing bibliographies - Working group              :d6,2025-01-01,2026-06-01
      APIs for writing bibliographies - Decision        :milestone,2026-06-01,0d

    End of project           :milestone,2028-12-31,0d
```

The brainstorming work, for example concerning the structures
repository, may begin before the reinformatization gets underway. All
operations related to the implementation of new features are postponed
until after reinformatization.

## Acquisitions of electronic documents

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Management fees processing       :ad1,2024-01-01,2024-06-01
      Implementation of management fees :ad2,2024-06-01,2025-04-01
      Definition of management fee criteria     :ad3,2024-01-01,2024-04-01
      Formalization of work with Couperin :ad4,2024-01-01,2024-12-31

    End of project           :milestone,2028-12-31,0d
```

Changes in the Abes’ “Acquisition of electronic documents” mission is
not dependent on reinformatization project. This work can therefore get
underway during the first years of the project.

## Networks and partners

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Working group on network representation modes :r1,2024-10-01,2025-12-31
      Renewal of network relationships - CoS :r2,2024-01-01,2024-06-01
      Renewal of network relationships - DSI :r3,2025-04-01,2026-12-31 
      Sudoc-PS renovation - Culture-HER working group     :r4,2024-02-01,2024-12-31
      Sudoc-PS renovation - Implementation      :r6,2025-01-01,2027-12-31                 

    End of project           :milestone,2028-12-31,0d
```

The brainstorming and dialogue needed to reinvigorate the networks are
not dependent on reinformatization. Thus, several actions can begin from
the very beginning of the project, particularly concerning the renewal
of the Sudoc-PS network.

## Reinforcing the Research & Development policy

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      "Call for projects / services / AI partnerships until production"  :rd3,2024-01-01,2028-12-31

    End of project           :milestone,2028-12-31,0d
```
The R&D work is dependent on gaining partnerships. Otherwise, something
could be included as a principal in the calendar, it were necessary to
launch other actions via various means such as a call for projects, a
service or a partnership

## Organisation, Strategic Human Resource planning, missions and evaluation

```mermaid
gantt
    tickInterval  6month
    axisFormat %Y
    dateFormat YYYY-MM-DD

      Abes reorganization      :o1,2024-01-01,2024-10-01
      Strategic Human Resource planning                    :o2,2024-01-01,2025-12-31
      Abes decree - rewriting, adoption and publication :o4,2024-01-01,2026-12-31

    End of project           :milestone,2028-12-31,0d
```

The reorganisation of Abes is an integral part of the project as it will
significantly tie up the teams. This restructuring of the teams is
logically planned for the start of the project as it is a prerequisite
to be able to then conduct the project under the best possible
conditions. The redrafting of the Abes decree is also a key element, and
thought could be given to this early in the project.
