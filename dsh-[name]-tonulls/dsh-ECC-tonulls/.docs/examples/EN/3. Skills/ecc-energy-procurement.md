# `/ecc-energy-procurement`

Helps analyze electricity and gas procurement for commercial facilities: tariffs, peak demand, supplier RFPs, hedging, and renewable PPAs/RECs.

## Simple Request

```text
/ecc-energy-procurement Compare options for reducing peak-demand charges at our warehouse.
```

## Template Request

```text
/ecc-energy-procurement
Facility and region: [data]
Consumption/bills: [aggregates without personal data]
Peak load and schedule: [description]
Tariff/contract: [terms]
Goal: [cost reduction/renewable energy/budget]
Prepare a preliminary analysis and identify data that needs confirmation.
```

## Detailed Request

```text
/ecc-energy-procurement Assess energy supply options for [facility/region/period]. Use supplied aggregated consumption, tariff, peak, and contract data [data]. Separate tariff optimization and demand charges, fixed/index/block-and-index options, supplier RFPs, and PPA/REC if applicable. Show key assumptions, price/load sensitivity, and term/volume risks; do not present estimates as guaranteed savings or professional advice. Do not contact suppliers, submit bids, or change contracts without separate approval. Result: options comparison, required information, and questions for a qualified procurement/energy specialist.
```
