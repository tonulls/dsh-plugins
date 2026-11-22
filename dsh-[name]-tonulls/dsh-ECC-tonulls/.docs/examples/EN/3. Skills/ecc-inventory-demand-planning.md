# ecc-inventory-demand-planning

**Command:** `/ecc-inventory-demand-planning`

**Purpose:** Retail demand-planning practices across multiple locations: choose forecasting methods, ABC/XYZ segmentation, optimize safety stock and reorder points, assess promotions and post-promotion dips, seasonal transitions, and markdown timing. Use for demand forecasting, replenishment, promotions, and inventory optimization.

## Prompts

### 1. Short Request
> /ecc-inventory-demand-planning Assess reorder points for the assortment.

### 2. Template with Context
> /ecc-inventory-demand-planning Stores: [count], SKUs: [group], demand/lead time: [data], seasonality: [description]. Suggest a forecasting method and list unknowns.

### 3. Detailed Request
> /ecc-inventory-demand-planning Prepare a demand plan for [category/locations]. Apply ABC/XYZ segmentation, choose a forecasting approach, and assess safety stock/reorder point and promotion/season effects using supplied data. Do not place purchase orders or change systems. Return assumptions, calculations, recommendations, and checks.
