# Webhook Tool Integration

**Created:** 6/9/2025 16:48  
**Updated:** 6/9/2025 16:48  
**Exported:** 6/9/2025 16:48  

## Response:
```json
// Tool registration for basic webhook
{
  "type": "function",
  "function": {
    "name": "call_webhook_tool",
    "description": "Calls an external webhook for processing data",
    "parameters": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "The user query or data to send to the webhook"
        }
      },
      "required": ["query"]
    }
  }
}
```

```json
// Webhook response structure
{
  "result": "Processed response from webhook"
}
```

```json
// LM Studio chat completion example using webhook tool
{
  "model": "your-local-model-name",
  "messages": [
    {
      "role": "user",
      "content": "Summarize this article using the webhook tool."
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "call_webhook_tool",
        "description": "Calls an external webhook for processing data",
        "parameters": {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "description": "The user query or data to send to the webhook"
            }
          },
          "required": ["query"]
        }
      }
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "call_webhook_tool"
    }
  }
}
```

```json
// LM Studio tool definition for workout board parsing
{
  "type": "function",
  "function": {
    "name": "parse_workout_board",
    "description": "Parses a workout board image using OCR and returns structured workout data.",
    "parameters": {
      "type": "object",
      "properties": {
        "image_base64": {
          "type": "string",
          "description": "The base64-encoded image of the workout board"
        }
      },
      "required": ["image_base64"]
    }
  }
}
```

```json
// Webhook payload example for workout board parsing
{
  "image_base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABA..."
}
```

```json
// Webhook response example for parsed workout
{
  "result": {
    "exercises": [
      { "name": "Push Ups", "sets": 3, "reps": 15 },
      { "name": "Squats", "sets": 3, "reps": 20 }
    ],
    "notes": "Focus on form"
  }
}
```

```json
// LM Studio chat call for workout image parsing
{
  "model": "local-ai-fitness-model",
  "messages": [
    {
      "role": "user",
      "content": "Can you parse this workout image for me?"
    }
  ],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "parse_workout_board",
        "description": "Parses a workout board image using OCR and returns structured workout data.",
        "parameters": {
          "type": "object",
          "properties": {
            "image_base64": {
              "type": "string",
              "description": "The base64-encoded image of the workout board"
            }
          },
          "required": ["image_base64"]
        }
      }
    }
  ],
  "tool_choice": {
    "type": "function",
    "function": {
      "name": "parse_workout_board"
    }
  }
}
```

```python
# Webhook server using Flask
from flask import Flask, request, jsonify
import base64

app = Flask(__name__)

@app.route("/api/parseWorkoutBoard", methods=["POST"])
def parse_workout_board():
    data = request.json
    image_data = data.get("image_base64")
    
    # [Mock Parsing Logic]
    # In production, integrate with AWS Textract, Google Vision, or a custom OCR model
    exercises = [
        { "name": "Push Ups", "sets": 3, "reps": 15 },
        { "name": "Squats", "sets": 3, "reps": 20 }
    ]
    notes = "Focus on form"

    return jsonify({"result": {"exercises": exercises, "notes": notes}})

if __name__ == "__main__":
    app.run(port=5000)
```

```json
// Postman collection for webhook testing
{
  "info": {
    "name": "LM Studio Fitness Webhook",
    "_postman_id": "f1b1a3b1-41f7-42d2-a0be-ocrhook",
    "description": "Webhook integration for AI Fitness Assistant - Workout Board Parsing",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Parse Workout Board",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"image_base64\": \"data:image/jpeg;base64,/9j/4AAQSk...\"\n}"
        },
        "url": {
          "raw": "https://yourdomain.com/api/parseWorkoutBoard",
          "protocol": "https",
          "host": [
            "yourdomain",
            "com"
          ],
          "path": [
            "api",
            "parseWorkoutBoard"
          ]
        }
      },
      "response": []
    }
  ]
}
```

```yaml
# OpenAPI 3.0 specification
openapi: 3.0.3
info:
  title: LM Studio AI Fitness Webhook API
  description: API for parsing workout board images and returning structured workout routines.
  version: 1.0.0
paths:
  /api/parseWorkoutBoard:
    post:
      summary: Parse workout board from image
      operationId: parseWorkoutBoard
      requestBody:
        description: Base64-encoded image for workout parsing
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - image_base64
              properties:
                image_base64:
                  type: string
                  example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABA..."
      responses:
        '200':
          description: Successfully parsed workout
          content:
            application/json:
              schema:
                type: object
                properties:
                  result:
                    type: object
                    properties:
                      exercises:
                        type: array
                        items:
                          type: object
                          properties:
                            name:
                              type: string
                            sets:
                              type: integer
                            reps:
                              type: integer
                      notes:
                        type: string
        '400':
          description: Invalid input
        '500':
          description: Server error
```



---
Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)