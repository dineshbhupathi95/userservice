# Use an official Python base image
FROM python:3.12

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file first to leverage Docker's caching mechanism
COPY requirements.txt .

RUN pip install --upgrade pip

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the FastAPI app files into the container
COPY . .

# Expose the application port
EXPOSE 8000

# Command to run the FastAPI application using Uvicorn
CMD ["uvicorn", "dashboard_backend:app", "--host", "0.0.0.0", "--port", "8000"]
