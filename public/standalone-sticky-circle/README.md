# Backend-Driven Sticky Circle & Dynamic Reveal Animation

Production-ready, framework-agnostic interactive scroll animation modeled after the **Global Disciples "One Third"** page.

## Key Features & DOM Architecture

1. **Exact DOM Conformity (DevTools Inspected):**
   ```html
   <div class="gdc-content-animation">
     <div class="section col-1">
       <!-- 4 Sequential Text Blocks (#text-block-1 through #text-block-4) -->
     </div>
     <section class="col-2">
       <figure>
         <div class="circle-mask" style="border-radius: 50%; overflow: hidden; border: 1px transparent solid; position: relative;">
           <img decoding="async" src="..." id="block-1" class="scroll-img" style="height: 29.0984%;">
           <img decoding="async" src="..." id="block-2" class="scroll-img" style="height: 29.0984%;">
           <img decoding="async" src="..." id="block-3" class="scroll-img" style="height: 29.0984%;">
           <img decoding="async" src="..." id="block-4" class="scroll-img" style="height: 29.0984%;">
           <div class="fill percentage" style="top: 29.0984%;">&nbsp;</div>
           <img decoding="async" src="..." class="placeholder-animate" style="height: 29.0984%;">
         </div>
       </figure>
     </section>
   </div>
   ```

2. **Scroll-Bound 60fps Animation Mechanics:**
   - **Initial State:** The image occupies the top `29.0984%` of the circle, while `div.fill.percentage` covers the bottom portion from `top: 29.0984%`.
   - **Dynamic Swapping:** As each text block in `col-1` crosses the midpoint of the viewport, the corresponding image (`#block-1` through `#block-4`) crossfades into view.
   - **Smooth Expansion (29.0984% → 100%):** Image heights interpolate from `29.0984%` to `100%`, while `div.fill.percentage` recedes down from `29.0984%` to `100%`, smoothly revealing the full round visual.
   - **Full Reverse Scroll Synchronization:** Scrolling up runs the exact sequence backwards, restoring the images, blue fill, and navbar scale.
   - **Post-Scroll Floating Portraits:** Unpins and floats circular portraits into view around the approach section.

## Backend Integration Guide

### 1. JSON Data Endpoint Schema (`/api/one-third-content`)

```json
{
  "eyebrow": "WHY LEAST-REACHED",
  "mainTitle": "One Third",
  "initialPercentage": 29.0984,
  "blocks": [
    {
      "id": "block-1",
      "eyebrow": "THE ONE-THIRD REALITY",
      "title": "A third of our world has not yet heard the good news of Jesus.",
      "paragraphs": [
        "Global Disciples refers to this third of the world as 'least-reached'...",
        "Through our simple and effective strategy of training and coaching..."
      ],
      "image": "https://example.com/images/block1.jpg",
      "alt": "Community children"
    }
  ],
  "approachReveal": {
    "eyebrow": "Our Approach",
    "title": "Equipping People to Reach Their Nations.",
    "subtitle": "We train leaders living near least-reached communities to multiply disciples.",
    "buttonText": "Learn More",
    "buttonLink": "/approach",
    "floatingPortraits": [ ... ]
  }
}
```

### 2. Integration with Common Backends

- **Node.js / Express:**
  ```javascript
  app.get('/api/one-third-content', async (req, res) => {
    const data = await ContentModel.findOne({ slug: 'one-third' });
    res.json(data);
  });
  ```

- **Python / Django:**
  ```python
  from django.http import JsonResponse

  def one_third_content(request):
      data = get_one_third_payload()
      return JsonResponse(data)
  ```

- **PHP / Laravel:**
  ```php
  Route::get('/api/one-third-content', function () {
      return response()->json(config('content.one_third'));
  });
  ```

- **ASP.NET Core (.NET 8):**
  ```csharp
  [HttpGet("api/one-third-content")]
  public IActionResult GetOneThirdContent()
  {
      return Ok(_contentService.GetOneThirdData());
  }
  ```
