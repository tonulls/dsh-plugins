# `ecc-inventory-demand-planning`

**命令：** `/ecc-inventory-demand-planning`

**用途：**多门店零售需求规划实践：选择预测方法、ABC/XYZ 分类、安全库存和订货点优化、促销效果及促销后回落评估、季节转换和降价时机。适用于需求预测、补货、促销和库存优化。

## 提示词

### 1. 简短请求

> /ecc-inventory-demand-planning 评估此商品组合的订货点。

### 2. 带上下文的模板

> /ecc-inventory-demand-planning 门店数：[数量]，SKU：[类别]，需求/交货周期：[数据]，季节性：[描述]。提出预测方法并列出未知项。

### 3. 详细请求

> /ecc-inventory-demand-planning 为[类别/地点]制定需求计划。根据提供的数据执行 ABC/XYZ 分类，选择预测方法，评估安全库存/订货点以及促销/季节影响。不要创建采购订单或修改系统。返回假设、计算、建议和验证方法。
