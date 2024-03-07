import boto3
import dotenv
import os

dotenv.load_dotenv()

aws_access_key_id = os.environ.get("AWS_ACCESS_KEY")
aws_secret_access_key = os.environ.get("AWS_SECRET_KEY")
aws_bucket = os.environ.get("AWS_BUCKET")
aws_endpoint = os.environ.get("AWS_ENDPOINT_URL")


client = boto3.client(
    service_name='s3',
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
    endpoint_url=aws_endpoint
)

obj = client.list_objects(Bucket=aws_bucket)
for f in obj["Contents"]:
    if not f["Key"].endswith(".png"):
        continue
    client.put_object_acl(ACL="public-read", Bucket=aws_bucket, Key=f["Key"])