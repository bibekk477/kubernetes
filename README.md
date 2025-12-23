# Project Overview

This repository contains multiple demo applications and their Kubernetes manifests, showcasing best practices for deploying applications on Kubernetes clusters. The projects range from simple Express.js applications to slightly complex setups with MongoDB integration and persistent data storage.

# Key Features

- [x] **Multiple Demo Applications:** Variety of Node.js/Express applications
- [x] **Database Integration:** MongoDB configuration and deployment examples
- [x] **Persistent Storage:** ConfigMaps and Persistent Volume demonstrations
- [x] **Kubernetes Manifests:** Ready-to-use YAML configuration files
- [x] **Containerization:** Dockerized applications for easy deployment

# Prerequisites

Before deploying these applications, ensure you have:

A running Kubernetes cluster (Minikube)
kubectl command-line tool installed and configured
Docker installed (for building custom images)
Basic understanding of Kubernetes concepts (Pods, Services, Deployments)

# Getting Started

1. Clone the Repository
   bashgit clone https://github.com/bibekk477/kubernetes.git
   cd kubernetes

2. Deploy

- Go to the particular folder
  cd <project-folder>

- Deploy Kubernetes Resources (Deployment & Service)
  kubectl apply -f <deployment-file>.yaml
  kubectl apply -f <service-file>.yaml

  example:
  kubectl apply -f mongo-db.yaml
  kubectl apply -f mongo-service.yaml

- Check if pods are running:
  kubectl get pods

  Check services:
  kubectl get svc

3. Check Deployment Status:
   kubectl get deployments
   kubectl get pods

   View logs if something goes wrong:
   kubectl logs <pod-name>

   For continuous logs:
   kubectl logs -f <pod-name>

4. Exposing the Service (Minikube)

- Expose Using Minikube (Recommended for Local Testing)
  minikube service <service-name>

- Get Service URL Manually
  minikube service <service-name> --url

5. Cleanup (Optional)

- Delete deployed resources:

  kubectl delete -f <deployment-file>.yaml
  kubectl delete -f <service-file>.yaml

- delete everything:

  kubectl delete all --all
