# ecc-liquid-glass-design

**Command:** `/ecc-liquid-glass-design`

**Purpose:** Applies the Liquid Glass design system to iOS 26 interfaces in SwiftUI, UIKit, and WidgetKit: dynamic glass materials with blur, reflections, and interactive transitions.

## Prompts

### 1. Short Request
> /ecc-liquid-glass-design Review this SwiftUI screen and suggest where Liquid Glass is appropriate in iOS 26 without harming readability or accessibility.

### 2. Template with Placeholders
> /ecc-liquid-glass-design Screen [purpose] in an iOS 26 app, implemented in [SwiftUI/UIKit/WidgetKit]. Target glass surface: [panel/control/transition], background and content: [description], constraints: [readability/performance/compatibility]. Suggest a platform-appropriate design and minimal changes only in [files/module]. Show a plan first; do not add dependencies or change other platforms.

### 3. Detailed Phased Request
> /ecc-liquid-glass-design Design or review Liquid Glass for scenario [screen/widget] on iOS 26 using [SwiftUI/UIKit/WidgetKit]. 1) Find existing material, navigation, and theme patterns in the project. 2) Identify specific surfaces for dynamic glass and explain the role of blur, reflection, and morphing during interaction; do not apply effects decoratively to every element. 3) Check text/icon contrast on changing backgrounds, boundary clarity, and interactive behavior. 4) Suggest state sequence and verification criteria on the target platform. Output: composition description, “element / state / material / readability risk” table, then a bounded implementation plan. If making changes, touch only approved files; do not install dependencies, access the network, release the app, or claim unverified compatibility.
